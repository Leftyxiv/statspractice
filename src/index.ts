import { CsvFileReader } from './CsvFileReader';
import { matchResult } from './matchResult';

const reader = new CsvFileReader('football.csv');
reader.read();


let manUnitedWins = 0;

for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === matchResult.HomeWin ) {
    ++manUnitedWins;
  } else if (match[2] === 'Man United' && match[5] === matchResult.AwayWin) {
    ++manUnitedWins;
  }
}

console.log(manUnitedWins);