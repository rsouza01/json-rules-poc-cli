import FileUtils  from './utils/fileUtils'
import {Token} from './tokenizer/token'
import { Parser } from './tokenizer/parser'
import { Evaluator } from './tokenizer/evaluator';


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
    this.rules = FileUtils.loadFile(rulesFilePath);
  }

  async loadRules(fact: any): Promise<any> {

    const tokenizer = Token.getInst();
    const rule = '56 - 89 * 78';
    // const rule = this.rules[0].rule_expression

    console.log(`RULE: ${rule}`);
    const tokens = tokenizer.tokenize(rule);
    console.log(tokens);

    const ast = new Parser().parse(rule);

    console.log(`EXPR: ${JSON.stringify(ast, null, 2)}`);

    const evalRet = new Evaluator(ast).evaluate();

    return [];
  }
}
