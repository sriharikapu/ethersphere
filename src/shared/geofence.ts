import geolib, { PositionAsDecimal } from 'geolib';
import BigNumber from 'bignumber.js';
import * as utm from 'utm';
import encodeUTM from './encodeUTM';

/**
 * Given a lat/lng coordinate, return an array of 5 meter lat/lng center points
 * to check
 */
export default function geofence(latitude: number, longitude: number): BigNumber[] {
  const initialPoint: PositionAsDecimal = { latitude, longitude };
  const dist = 20;
  const bearingTopRight = 45;
  const bearingBottomLeft = 225;
  const topRight = geolib.computeDestinationPoint(initialPoint, dist, bearingTopRight);
  const bottomLeft = geolib.computeDestinationPoint(initialPoint, dist, bearingBottomLeft);
  const utmTopRight = utm.fromLatLon(topRight.latitude, topRight.longitude);
  const utmBottomLeft = utm.fromLatLon(bottomLeft.latitude, bottomLeft.longitude);
  const _minEasting = utmBottomLeft.easting;
  const _maxEasting = utmTopRight.easting;
  const _minNorthing = utmBottomLeft.northing;
  const _maxNorthing = utmTopRight.northing;
  const minEasting = _minEasting - (_minEasting % 5);
  const maxEasting = _maxEasting - (_maxEasting % 5);
  const minNorthing = _minNorthing - (_minNorthing % 5);
  const maxNorthing = _maxNorthing - (_maxNorthing % 5);

  const res = [];
  for (let easting = minEasting; easting < maxEasting; easting += 5) {
    for (let northing = minNorthing; northing < maxNorthing; northing += 5) {
      const encodeOpts = {
        easting,
        northing,
        zoneNum: utmBottomLeft.zoneNum,
        zoneLetter: utmBottomLeft.zoneLetter
      }
      const encoded = encodeUTM(encodeOpts);

      res.push(encoded);
    }
  }


  return res;
}
