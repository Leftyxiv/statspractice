import { MatchData } from './MatchData';

export interface Analyzer {
  run(matches: MatchData[]): string;
};

export interface OutputTarget {
  write(output: string): void;
};

export class Summary {
  constructor(public analyzer: Analyzer, public output: OutputTarget) {};

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.output.write(output);
  }
};