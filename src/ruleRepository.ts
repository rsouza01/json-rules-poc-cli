import FileUtils from './utils/fileUtils'
import { Token } from './tokenizer/token'
import { Parser } from './tokenizer/parser'
import { Evaluator } from './tokenizer/evaluator';
import RuleVisitor from './tokenizer/visitors/rulevisitor';


export interface RuleRepository {
  loadRules(fact: any): Promise<any>;
}


export class JSONRuleRepository implements RuleRepository {

  private readonly rules: any;

  constructor(rulesFilePath: string) {
    this.rules = FileUtils.loadFile(rulesFilePath);
  }

  async loadRules(fact: any): Promise<any> {
    return this.rules.filter(element => {
      return element.organization !== undefined && element.proposition !== undefined &&
        element.organization === fact.organization &&
        element.proposition === fact.proposition;
    });
  }
}

export class ExpressionRuleRepository implements RuleRepository {

  private readonly rules: any;

  constructor(rulesFilePath: string) {
    const rulesFromFile: any = FileUtils.loadFile(rulesFilePath);

    console.log(`RULES_FROM_CONF: ${JSON.stringify(rulesFromFile, null, 2)}`);

    this.rules = rulesFromFile.map((userRule: any) => {
      console.log(`USER_RULE: ${JSON.stringify(userRule.rule_expression, null, 2)}`);
      const ast = new Parser().parse(userRule.rule_expression);
      const evalRet = new Evaluator(ast, new RuleVisitor()).evaluate();
      console.log(`EVAL_RET: ${JSON.stringify(evalRet, null, 2)}`);
      console.log('------------------------------------------------------------------------');

      return this.buildRule(userRule, evalRet[0]);
    });

    console.log(`RULES: ${JSON.stringify(this.rules, null, 2)}`);
  }

  buildRule(userRule: any, translatedRule: any): Promise<any> {
    // console.log(`>>> USER RULE: ${JSON.stringify(userRule, null, 2)}`);
    console.log(`>>> TRANSLATED RULE: ${JSON.stringify(translatedRule, null, 2)}`);

    userRule.rules = {
      all: [],
    };

    userRule.rules.all.push(translatedRule);
    console.log(`>>> USER RULE WITH ALL: ${JSON.stringify(userRule, null, 2)}`);
    return userRule;
  }

  async loadRules(fact: any): Promise<any> {
    return this.rules;
  }
}
