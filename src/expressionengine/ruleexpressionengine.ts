import { ExpressionEngine } from './expressionengine';

export class RuleExpressionEngine implements ExpressionEngine {

  private rule: string;

  constructor(rule: string) {
    this.rule = rule;
  }

  isValidRule() : boolean {
    return true;
  }
}
