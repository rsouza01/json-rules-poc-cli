import engineFactory, { Engine } from 'json-rules-engine'
import FileUtils  from './utils/fileUtils'

export class FirmwareRuleEngine {

  private readonly facts: any;
  private readonly rules: any;

  constructor(factsPath: string, rulesFilePath: string) {
    this.facts = FileUtils.loadFile(factsPath);
    this.rules = FileUtils.loadFile(rulesFilePath);
  }

  async process(): Promise<any> {

    const ruleEngine: Engine = new Engine();

    this.rules.map(ruleEventPair => {
      console.log('------------------------------------------------------------------------');
      console.log(`Adding rule: ${JSON.stringify(ruleEventPair)}`);

      ruleEngine.addRule({
        conditions: ruleEventPair.rules,
        event: ruleEventPair.event
      });
    });

    this.facts.map(fact => {
      ruleEngine
      .run(fact)
      .then((results) => {
        console.log('------------------------------------------------------------------------');
        console.log(`FACT: ${JSON.stringify(fact)}`);
        console.log(`RESULT: ${JSON.stringify(results.events)}`);
        console.log(`TRIGGERED: ${results.events.length > 0 ? 'TRUE' : 'FALSE'}`);
      })
      .catch(err => console.log(err.stack))
    });



    const processResult: any = {
      processed: true
    }

    return processResult;
  }
}
