'use strict';
import * as program from 'commander';
import { FirmwareRuleEngineProcessor } from './ruleEngineProcessor';
program
    .version('1.0.0')
    .option('-f, --facts <facts>', 'Facts: Facts payload')
    .option('-r, --rules <rules>', 'Rules: Rules payload')
    .option('-e, --expression <expression>', 'Expression: Expression payload')
    .action(async (options) => {
    try {
        console.log('------------------------------------------------------------------------');
        console.log('JSON Rules CLI');
        console.log('vs 1.1 - 2020-06-01');
        console.log('------------------------------------------------------------------------');
        const processedRule = await new FirmwareRuleEngineProcessor(options.facts, options.rules, options.expression).process();
        console.log('Rules processed with success.');
        console.log(`Status: ${JSON.stringify(processedRule)}`);
    }
    catch (err) {
        console.error(err);
    }
})
    .parse(process.argv);
//# sourceMappingURL=index.js.map