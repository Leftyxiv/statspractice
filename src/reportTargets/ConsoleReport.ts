import { OutputTarget } from '../Summary';

export class ConsoleReport implements OutputTarget {
  public write(message: string): void {
      console.log(message);
  }
}