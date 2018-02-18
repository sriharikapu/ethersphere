import abi from 'shared/ethereum/abi';
import Web3 from 'web3';
import settings from 'settings';
import getGeofence from 'shared/geofence';
import decode from 'shared/decode';
import * as utm from 'utm';

const provider = new Web3.providers.HttpProvider(settings.ETHEREUM_NODE_URL);
const web3 = new Web3(provider);
const contract = new web3.eth.Contract(abi, settings.CONTRACT_ADDRESS);

const cache = {}

export default async function(req, res) {
  const lat = parseFloat(req.query.lat);
  const lng = parseFloat(req.query.lng);
  // const lat = 39.73585094188712;
  // const lng = -104.98762949619893;
  const blocksToCheck = getGeofence(lat, lng);

  try {
    const matches = [];
    for (let i = 0; i < blocksToCheck.length; i++) {
      const blockId = blocksToCheck[i];
			if (cache[blockId.toString(10)] != undefined) {
				matches.push(cache[blockId.toString(10)])
				continue
			}

      const name = await contract.methods.dataName(blockId).call({ from: '0x2B981863A0FBf4e07c8508623De8Bd6d4b28419C'});

      console.log(blockId, name)
      if (name) {
        const { easting, northing, zoneNum, zoneLetter } = decode(blockId);
        const coords = utm.toLatLon(easting, northing, zoneNum, zoneLetter);

				const result = {
          lat: coords.latitude,
          lng: coords.longitude,
          message: name
        }

				cache[blockId.toString(10)] = result

        matches.push(result)
      }
    }

    return res.status(200).send(matches);
  } catch (err) {
    throw Error(err.message);
  }
}
