"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
var matchReader = MatchReader_1.MatchReader.fromFile('football.csv');
matchReader.load();
var summary = Summary_1.Summary.winsAnalysisandPrintReport('Man United');
summary.buildAndPrintReport(matchReader.matches);
