import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { matchResult } from './matchResult';

const csvFileReader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();



// console.log(manUnitedWins);