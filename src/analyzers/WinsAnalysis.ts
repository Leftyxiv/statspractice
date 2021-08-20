import { MatchData } from './../MatchData';
import { Analyzer } from '../Summary';
import { matchResult } from '../matchResult';

export class WinsAnalysis implements Analyzer{
  constructor(public name: string) {}

  run(matches: MatchData[]): string {
    let wins = 0;

    for (let match of matches) {
      if (match[1] === 'Man United' && match[5] === matchResult.HomeWin ) {
        ++wins;
      } else if (match[2] === 'Man United' && match[5] === matchResult.AwayWin) {
        ++wins;
      }
    }
    return `team ${this.name} won ${wins} games.`
  }

}