import engineFactory, { Engine } from 'json-rules-engine'
import FileUtils  from './utils/fileUtils'
import { RuleRepository, JSONRuleRepository, ExpressionRuleRepository } from './ruleRepository';

const engineOptions = {
  allowUndefinedFacts: true
};

export class FirmwareRuleEngineProcessor {

  private readonly facts: any;
  private readonly ruleRepository: RuleRepository;

  constructor(factsPath: string, rulesFilePath: string, expressionFilePath: string) {
    this.facts = FileUtils.loadFile(factsPath);
    if(rulesFilePath){
      this.ruleRepository = new JSONRuleRepository(rulesFilePath);
    } else if(expressionFilePath) {
      this.ruleRepository = new ExpressionRuleRepository(expressionFilePath);
    } else {
      throw new Error('No valid rules defined.');
    }
  }

  async process(): Promise<any> {
    this.facts.map(async fact => {

      /** Gets the rules for the Org + Proposition  */
      const rules = await this.ruleRepository.loadRules(fact);

      if(rules !== undefined && rules.length === 0) {
        console.log('No rules defined.');
      } else {
        console.log(`ORG:${fact.organization}, PROPOSITION:${fact.proposition} => ${rules.length} rules loadded.`);
      }

      const ruleList = [];

      rules.map(ruleEventPair => {
        console.log('------------------------------------------------------------------------');
        console.log(`Adding rule: ${JSON.stringify(ruleEventPair.name)}`);

        ruleList.push({
          name: ruleEventPair.name,
          priority: ruleEventPair.priority,
          conditions: ruleEventPair.rules,
          event: ruleEventPair.event
        });
      });
      console.log('========================================================================');

      const ruleEngine: Engine = new Engine(ruleList, engineOptions);

      ruleEngine.addFact('fact', fact);

      ruleEngine
      .run(fact)
      .then((results) => {
        console.log('========================================================================');
        // console.log(`FACT: ${JSON.stringify(fact, null, 2)}`);
        console.log(`FACT: ${JSON.stringify(fact)}`);
        console.log('------------------------------------------------------------------------');
        // console.log(`RAW RESULT: ${JSON.stringify(results)}`);
        console.log(`# OF RESULTS: ${results.events.length}`);
        console.log(`RESULTS: ${JSON.stringify(results.events, null, 2)}`);


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
