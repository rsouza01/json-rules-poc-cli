'use strict';

import * as fs from 'fs';

export default class FileUtils {
  static loadFile(path: string): object {
    if (!fs.existsSync(path)) throw new Error(`File not found: ${path}`);

    const content = fs.readFileSync(path, 'utf-8');
    return JSON.parse(content);
  }
}
