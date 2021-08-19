"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var CsvFileReader_1 = require("./CsvFileReader");
var matchResult_1 = require("./matchResult");
var csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
var manUnitedWins = 0;
for (var _i = 0, _a = matchReader.matches; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === 'Man United' && match[5] === matchResult_1.matchResult.HomeWin) {
        ++manUnitedWins;
    }
    else if (match[2] === 'Man United' && match[5] === matchResult_1.matchResult.AwayWin) {
        ++manUnitedWins;
    }
}
console.log(manUnitedWins);
