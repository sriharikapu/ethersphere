import Web3 from 'web3';
import settings from 'settings';
import BigNumber from 'bignumber.js';
import abi from 'shared/ethereum/abi';

const provider = new Web3.providers.HttpProvider(settings.ETHEREUM_NODE_URL);
const web3 = new Web3(provider);
const contract = new web3.eth.Contract(abi, settings.CONTRACT_ADDRESS);

export default (blockId: BigNumber) => web3.eth.call({
    to: settings.CONTRACT_ADDRESS,
    data: contract.methods.ownerOf(blockId.toFixed(0)).encodeABI()
}).then(address => {
  console.log(address)
  return address === '0x'
})
