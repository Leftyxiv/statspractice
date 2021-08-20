import { MatchReader } from './MatchReader';
import { Summary } from './Summary';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { HtmlReport } from './reportTargets/HtmlReport';


const matchReader = MatchReader.fromFile('football.csv');
matchReader.load();

const summary = Summary.winsAnalysisandPrintReport('Man United');

summary.buildAndPrintReport(matchReader.matches);