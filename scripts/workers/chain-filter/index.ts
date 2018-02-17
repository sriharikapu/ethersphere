import Redis from 'ioredis';
import net from 'net';
import winston from 'winston';
import chalk from 'chalk';
import Web3 from 'web3';
import settings from 'settings';
import BigNumber from 'bignumber.js';
import abiDecoder from 'abi-decoder';
import erc20ABI from 'human-standard-token-abi';
import { Block, Transaction, Log, sequelize } from 'server/models/postgres';
import { connectMongoose } from '../utils';

interface ITransaction {
  blockHash: string;
  blockNumber: number;
  from: string;
  gas: number;
  gasPrice: BigNumber;
  hash: string;
  input: string;
  nonce: number;
  to: string;
  transactionIndex: number;
  value: BigNumber;
  v: string;
  r: string;
  s: string;
  timestamp: number;
}

interface ILog {
  address: string;
  blockHash: string;
  blockNumber: number;
  data: string;
  logIndex: number;
  removed: boolean;
  topics: string[];
  transactionHash: string;
  transactionIndex: number;
}

interface ITransactionReceipt {
  blockHash: string;
  blockNumber: number;
  contractAddress: string;
  cumulativeGasUsed: number;
  gasUsed: number;
  logs: ILog[];
  logsBloom: string;
  root: string;
  status: number;
  transactionHash: string;
  transactionIndex: number;
  from: string;
  to: string;
}

interface IBlock {
  difficulty: BigNumber;
  extraData: string;
  gasLimit: number;
  gasUsed: number;
  hash: string;
  logsBloom: string;
  miner: string;
  mixHash: string;
  nonce: string;
  number: number;
  parentHash: string;
  receiptsRoot: string;
  sha3Uncles: string;
  size: number;
  stateRoot: string;
  totalDifficulty: BigNumber;
  transactionsRoot: string;
  transactions: ITransaction[];
  timestamp: number;
}

const range = (min, max) => max < min
  ? []
  : Array(max + 1 - min).fill(0).map((_, i) => min + i);


const info = str => winston.info(`${chalk.blue('[chain-filter]')} ${str}`);
const error = str => winston.error(`${chalk.red('[chain-filter] ERROR:')} ${str}`);

/**
 * Initialization
 */
const db = connectMongoose();
const provider = new Web3.providers.IpcProvider('/root/.ethereum/geth.ipc', net);
const web3 = new Web3(provider);
const fetchLatestBlock = Promise.promisify(web3.eth.getBlockNumber);
const fetchBlock = Promise.promisify(web3.eth.getBlock);
const fetchTransactionReceipt = Promise.promisify(web3.eth.getTransactionReceipt)
const args = process.argv.slice();

abiDecoder.addABI(erc20ABI);


/**
 * Setup Redis
 */
args.shift();
args.shift();

const workerIdArg = args.find(a => /^id=./.test(a)) || '';
const workerIdArgParts = workerIdArg.split('=');
const workerId = workerIdArgParts.length && workerIdArgParts[1]
const redis = new Redis(settings.REDIS_URI);

function normalizeTransaction(transaction: ITransaction, block: IBlock) {
  const normalized = {
    blockHash: transaction.blockHash,
    blockNumber: transaction.blockNumber,
    from: transaction.from,
    gas: transaction.gas,
    gasPrice: transaction.gasPrice.toFixed(),
    hash: transaction.hash,
    input: transaction.input,
    nonce: transaction.nonce,
    to: transaction.to,
    transactionIndex: transaction.transactionIndex,
    value: transaction.value.toFixed(),
    v: transaction.v,
    r: transaction.r,
    s: transaction.s,
    timestamp: block.timestamp
  } as any;

  return normalized;
}

// Fetch metadata and logs for transactions and prepare it for db insert
async function handleTransactions(block: IBlock) {
  const res = [];
  // const transactions = block.transactions.map(t => normalizeTransaction(t, block));

  try {
    for (let i = 0; i < block.transactions.length; i++) {
      const transaction = block.transactions[i];
      const _transactionReceipt = await (fetchTransactionReceipt as any)(transaction.hash);
      const transactionReceipt = _transactionReceipt as ITransactionReceipt;

      const preparedTransaction = {
        ...normalizeTransaction(transaction, block),
        cumulativeGasUsed: transactionReceipt.cumulativeGasUsed,
        gasUsed: transactionReceipt.gasUsed,
        contractAddress: transactionReceipt.contractAddress,
        Logs: transactionReceipt.logs.map((log, i) => ({
          address: log.address,
          blockHash: log.blockHash,
          blockNumber: log.blockNumber,
          data: log.data,
          logIndex: log.logIndex,
          transactionHash: log.transactionHash,
          transactionIndex: log.transactionIndex,
          removed: log.removed,
          key: `${log.transactionHash}-${i}`,
          logTopic0: log.topics[0] || null,
          logTopic1: log.topics[1] || null,
          logTopic2: log.topics[2] || null,
          logTopic3: log.topics[3] || null
        }))
      }

      res.push(preparedTransaction);
    }

    return res;
  } catch (err) {
    throw Error(err.message);
  }
}

interface WorkerState {
  [workerId: string]: number
};

function isBlockBeingProcessed(blockNumber: number, workerState: WorkerState): boolean {
  return Object.keys(workerState)
    .filter(key => key !== workerId) // Ignore ourself
    .map(key => workerState[key])
    .some(n => n === blockNumber);
}

async function addBlock(blockNumber: number) {

  /**
   * Let redis know what block we're working on
   */
  try {
    const workerStateJSON = await redis.get('chain-worker-state');
    const workerState: any = workerStateJSON ? JSON.parse(workerStateJSON) : {};

    if (isBlockBeingProcessed(blockNumber, workerState)) {
      return;
    } else {
      workerState[workerId] = blockNumber;
      await redis.set('chain-worker-state', JSON.stringify(workerState));
    }
  } catch (e) {
    throw Error(e.message);
  }

  const timerId = `${workerId}-block-${blockNumber}`;

  try {
    const _block = await (fetchBlock as any)(blockNumber, true); // 2nd param = get full tx
    const block = _block as IBlock;

    console.time(timerId);

    info(`Processing block ${blockNumber} -- total tx count in block: ${block.transactions.length}`);
    const transactions = await handleTransactions(block);

    const logs = [];

    transactions.forEach(t => {
      t.Logs.forEach(l => logs.push(l))
    })

    const doc = {
      number: block.number,
      difficulty: block.difficulty.toFixed(),
      extraData: block.extraData,
      gasLimit: block.gasLimit,
      gasUsed: block.gasUsed,
      hash: block.hash,
      logsBloom: block.logsBloom,
      miner: block.miner,
      mixHash: block.mixHash,
      nonce: block.nonce,
      parentHash: block.parentHash,
      receiptsRoot: block.receiptsRoot,
      sha3Uncles: block.sha3Uncles,
      size: block.size,
      stateRoot: block.stateRoot,
      timestamp: block.timestamp,
      totalDifficulty: block.totalDifficulty.toFixed(),
      transactionsRoot: block.transactionsRoot
    } as any;

    await sequelize.transaction(transaction =>
      Block.create(doc, {
        logging: false,
        transaction
      }).then(block => {
        const opts = { transaction, logging: false };

        return Transaction.bulkCreate(transactions, opts).then(txDocs => {
          const opts = { transaction, logging: false };

          return Log.bulkCreate(logs, opts);
        })
      })
    ).catch(err => error(JSON.stringify(err, null, '  ')));

    {
      const workerStateJSON = await redis.get('chain-worker-state');
      const workerState = JSON.parse(workerStateJSON);

      delete workerState[workerId];

      await redis.set('chain-worker-state', JSON.stringify(workerState));
    }
  } catch (err) {
    throw Error(err.message);
  } finally {
    console.timeEnd(timerId);
  }
}

interface Gap {
  gap_start: number;
  gap_end: number;
}

async function fetchMissingBlockNumbers(): Promise<number[]> {
  try {
    const latestBlock = await fetchLatestBlock();
    // Prevent handling orphaned blocks.
    const latestReliableBlock = (latestBlock as number) - 5;
    const max = await sequelize.query(`
      SELECT number FROM "public"."eth_blocks" ORDER BY number DESC LIMIT 1
    `, { type: sequelize.QueryTypes.SELECT });
    const gaps: Gap[] = await sequelize.query(`
      SELECT gap_start, gap_end FROM (select number + 1 as gap_start,
       next_nr - 1 as gap_end
      from (
        select number, lead(number) over (order by number) as next_nr
        from "eth_blocks"
      ) nr
      where nr.number + 1 <> nr.next_nr) as g
      UNION ALL (SELECT 0 as gap_start, number as gap_end FROM "eth_blocks" ORDER BY number ASC LIMIT 1)
      ORDER BY gap_start
    `, { type: sequelize.QueryTypes.SELECT });

    let res = [];

    // Add gaps
    gaps.forEach((gap: Gap) => {
      const additional = range(gap.gap_start, gap.gap_end);

      res = [...res, ...additional];
    });

    const maxBlockNum = max.length ? max[0].number : 0;
    // Add blocks between max and current latest
    const head = range(maxBlockNum, latestReliableBlock);
    res = [...res, ...head];

    return res;
  } catch (e) {
    throw Error(e.message);
  }
}

async function scanEntireChain() {
  info(`Starting chain filter`);

  try {
    await sequelize.authenticate({ logging: false });
    await Block.sync({ logging: false });
    await Transaction.sync({ logging: false });
    await Log.sync({ logging: false });

    const blockNumbers = await fetchMissingBlockNumbers();

    for (let i = blockNumbers.length - 1; i >= 0; i--) {
      const n = blockNumbers[i];

      // 1. Check if we already have this block.
      const existing = await Block.findOne({
        where: {
          number: n
        }
      });

      if (!existing) {
        await addBlock(n);
      }
    }
  } catch (e) {
    error(`(chain-filter) ${e.message}`);
  }
}

/**
 * Constantly scans the latest blocks.
 */
async function scanHead() {
  try {
    await sequelize.authenticate({ logging: false });
    await Block.sync({ logging: false });
    await Transaction.sync({ logging: false });
    await Log.sync({ logging: false });

    const blockNumbers = await fetchMissingBlockNumbers();
    let offset = 10;
    const head = blockNumbers.slice(blockNumbers.length - offset);

    for (let i = 0; i < head.length; i++) {
      const n = head[i];

      // 1. Check if we already have this block.
      const existing = await Block.findOne({
        where: {
          number: n
        }
      });

      if (!existing) {
        await addBlock(n);
      }
    }
  } catch (e) {
    error(`(head-worker) ${e.message}`);
    throw Error(e);
  }
}

export function initHeadWorker() {
  return scanHead()
    .then(initHeadWorker)
    .catch((e) => {
      error(e.message)
      return initHeadWorker();
    })
}

export function initChainWorker() {
  return scanEntireChain()
    .then(initChainWorker)
    .catch((e) => {
      error(e.message)
      return initChainWorker();
    })
}
