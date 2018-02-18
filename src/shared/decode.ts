import BigNumber from 'bignumber.js';

type UTM = {
  easting: number;
  northing: number;
  zoneNum: number;
  zoneLetter: string;
}

export default function decodeToUTM(blockId: BigNumber): UTM {
  const zoneLetterByInt = {
    '00': 'c',
    '01': 'd',
    '02': 'e',
    '03': 'f',
    '04': 'g',
    '05': 'h',
    '06': 'j',
    '07': 'k',
    '08': 'l',
    '09': 'm',
    '10': 'n',
    '11': 'p',
    '12': 'q',
    '13': 'r',
    '14': 's',
    '15': 't',
    '16': 'u',
    '17': 'v',
    '18': 'w',
    '19': 'x'
  };
  const encoded = blockId.toFixed(0);
  const zoneNumPart = encoded.slice(0, 2);
  const zoneLetterPart = encoded.slice(2,4);
  const eastingPart = encoded.slice(4, 10);
  const northingPart = encoded.slice(10);

  return {
    easting: parseInt(eastingPart),
    northing: parseInt(northingPart),
    zoneNum: parseInt(zoneNumPart),
    zoneLetter: zoneLetterByInt[zoneLetterPart]
  }
}
