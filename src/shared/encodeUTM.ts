import BigNumber from 'bignumber.js';
import leftPad from 'left-pad';

type UTM = {
  easting: number;
  northing: number;
  zoneNum: number;
  zoneLetter: string;
}

export default function encodeUTM(utm: UTM): BigNumber {
  const intByZoneLetter = {
    c: '00',
    d: '01',
    e: '02',
    f: '03',
    g: '04',
    h: '05',
    j: '06',
    k: '07',
    l: '08',
    m: '09',
    n: '10',
    p: '11',
    q: '12',
    r: '13',
    s: '14',
    t: '15',
    u: '16',
    v: '17',
    w: '18',
    x: '19'
  };

  const zoneNumPart = utm.zoneNum;
  const zoneLetterPart = intByZoneLetter[utm.zoneLetter.toLowerCase()];
  const eastingPart = utm.easting - (utm.easting % 5);
  const northingPart = utm.northing - (utm.northing % 5);
  const encoded = `${leftPad(zoneNumPart, 2, '0')}${zoneLetterPart}${leftPad(eastingPart, 6, '0')}${leftPad(northingPart, 7, '0')}`;

  return new BigNumber(encoded);
}
