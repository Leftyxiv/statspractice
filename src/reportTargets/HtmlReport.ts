import fs from 'fs';
import { OutputTarget } from '../Summary';

export class HtmlReport implements OutputTarget {
  write(message: string): void {
    const html = `
    <div>
      <h1>Analysis Output</h1>
      <div>${message}</div>
    </div>
    `
    fs.writeFileSync('report.html', html);
  }
}