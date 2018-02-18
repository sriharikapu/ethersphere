import BigNumber from 'bignumber.js';

type UTM = {
  easting: number;
  northing: number;
  zoneNum: number;
  zoneLetter: string;
}

export default function encodeUTM(utm: UTM): BigNumber {
  const intByZoneLetter = {
    c: 0,
    d: 1,
    e: 2,
    f: 3,
    g: 4,
    h: 5,
    // i: 6,
    j: 6,
    k: 7,
    l: 8,
    m: 9,
    n: 10,
    // o: 11,
    p: 11,
    q: 12,
    r: 13,
    s: 14,
    t: 15,
    u: 16,
    v: 17,
    w: 18,
    x: 19
  };

  const zoneNumPart = utm.zoneNum;
  const zoneLetterPart = intByZoneLetter[utm.zoneLetter.toLowerCase()];
  const eastingPart = utm.easting - (utm.easting % 5);
  const northingPart = utm.northing - (utm.northing % 5);
  const encoded = `${zoneNumPart}${zoneLetterPart}${eastingPart}${northingPart}`;

  return new BigNumber(encoded);
}
