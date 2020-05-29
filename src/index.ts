'use strict';

import * as program from 'commander';
import { FirmwareRuleEngine } from './ruleEngine';

program
  .version('1.0.0')
  .option('-f, --facts <facts>', 'Facts: Facts payload')
  .option('-r, --rules <rules>', 'Rules: Rules payload')
  .action(async (options) => {
    try {
      console.log('Testing rules...');
      const processedRule: any =
        await new FirmwareRuleEngine(options.facts, options.rules).process();

      console.log('Rules processed with success.');
      console.log(`Status: ${JSON.stringify(processedRule)}`);
    } catch(err) {
      console.error(err);
    }
  })
  .parse(process.argv);
