import abi from 'server/lib/ethereum/abi';
import Web3 from 'web3';
import settings from 'settings';
import getGeofence from 'shared/geofence';

const provider = new Web3.providers.HttpProvider(settings.ETHEREUM_NODE_URL);
const web3 = new Web3(provider);
const contract = new web3.eth.Contract(abi, '0x182A520E304C496fd9F22aeEE003660C92C3E9b9');
console.log(contract.options)

export default async function(req, res) {
  const lat = 39.73585094188712;
  const lng = -104.98762949619893;
  const blocksToCheck = getGeofence(lat, lng);

  try {
    for (let i = 0; i < blocksToCheck.length; i++) {
      const blockId = blocksToCheck[i];
      const name = await contract.methods.dataName(blockId).call({ from: '0x2B981863A0FBf4e07c8508623De8Bd6d4b28419C'});

      console.log(blockId.toFixed(0), name);
    }
  } catch (err) {
    throw Error(err.message);
  }
}
