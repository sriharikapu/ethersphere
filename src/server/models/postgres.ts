import pg from 'pg';
import Sequelize from 'sequelize';

pg.defaults.parseInt8 = true;

export const sequelize = new Sequelize('postgres://awsuser:mttsJpJu7Fia4GzhbWsfcK@ethereum-blockchain.cmeuocvz0fpb.us-west-2.rds.amazonaws.com:5432/blockchain', {
  host: 'localhost',
  dialect: 'postgres',
  dialectOptions: {
    supportBigNumbers: true
  }
});

export const Block = sequelize.define('eth_block', {
  difficulty: Sequelize.DECIMAL,
  extraData: Sequelize.STRING,
  gasLimit: Sequelize.INTEGER,
  gasUsed: Sequelize.INTEGER,
  hash: Sequelize.STRING,
  logsBloom: Sequelize.TEXT,
  miner: Sequelize.STRING,
  mixHash: Sequelize.STRING,
  nonce: Sequelize.STRING,
  number: Sequelize.INTEGER,
  parentHash: Sequelize.STRING,
  receiptsRoot: Sequelize.STRING,
  sha3Uncles: Sequelize.STRING,
  size: Sequelize.INTEGER,
  stateRoot: Sequelize.STRING,
  timestamp: Sequelize.INTEGER,
  totalDifficulty: Sequelize.DECIMAL,
  transactionsRoot: Sequelize.STRING
}, {
  indexes: [
    // block number is unique
    {
      fields: ['number'],
      unique: true,
      primaryKey: true
    }
  ]
});

export const Transaction = sequelize.define('eth_transaction', {
  blockHash: Sequelize.STRING,
  blockNumber: Sequelize.INTEGER,
  from: Sequelize.STRING,
  gas: Sequelize.INTEGER,
  gasPrice: Sequelize.DECIMAL,
  hash: Sequelize.STRING,
  input: Sequelize.TEXT,
  nonce: Sequelize.INTEGER,
  to: Sequelize.STRING,
  transactionIndex: Sequelize.INTEGER,
  value: Sequelize.DECIMAL,
  v: Sequelize.STRING,
  r: Sequelize.STRING,
  s: Sequelize.STRING,
  timestamp: Sequelize.INTEGER,
  // Below fields are added by querying the transaction receipt
  cumulativeGasUsed: Sequelize.DECIMAL,
  gasUsed: Sequelize.DECIMAL,
  contractAddress: Sequelize.STRING,
  // below fields are not returned by default by the JSON RPC API.
  isTokenTransfer: Sequelize.BOOLEAN,
  tokenTransferTo: Sequelize.STRING,
  tokenTransferValue: Sequelize.DECIMAL
}, {
  indexes: [
    // hash is unique
    {
      fields: ['hash'],
      unique: true,
      primaryKey: true
    },
    // Index 'from' field
    {
      name: 'eth_transactions_from_index',
      method: 'BTREE',
      fields: ['from']
    },
    // Index 'to' field
    {
      name: 'eth_transactions_to_index',
      method: 'BTREE',
      fields: ['to']
    },
    // Index 'tokenTransfetTo' field
    {
      name: 'eth_transactions_tokenTransferTo_index',
      method: 'BTREE',
      fields: ['tokenTransferTo']
    }
  ]
});

export const Log = sequelize.define('eth_log', {
  address: Sequelize.STRING,
  blockHash: Sequelize.STRING,
  blockNumber: Sequelize.INTEGER,
  data: Sequelize.TEXT,
  logIndex: Sequelize.INTEGER,
  removed: Sequelize.BOOLEAN,
  transactionHash: Sequelize.STRING,
  transactionIndex: Sequelize.INTEGER,
  logTopic0: Sequelize.TEXT,
  logTopic1: Sequelize.TEXT,
  logTopic2: Sequelize.TEXT,
  logTopic3: Sequelize.TEXT,
  // unique key which is concatenation of tx hash + log index
  key: Sequelize.STRING
}, {
  indexes: [
    {
      fields: ['key'],
      unique: true,
      allowNull: false,
      primaryKey: true
    },
    {
      name: 'eth_logs_address_index',
      method: 'BTREE',
      fields: ['address']
    }
  ]
});

Transaction.belongsTo(Block, { foreignKey: 'blockNumber', targetKey: 'number' });
Log.belongsTo(Transaction, { foreignKey: 'transactionHash', targetKey: 'hash' });
