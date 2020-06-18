import { ExpressionEngine } from './expressionengine';
import { RuleExpressionEngine } from './ruleexpressionengine';


export enum ExpressionEngineTypes {
  RuleExpressionEngine,
  InvalidEngine
}

export class ExpressionEngineFactory {
  static createExpressionEngine(engineType: ExpressionEngineTypes, rule: string) : ExpressionEngine {
    switch(engineType) {
      case ExpressionEngineTypes.RuleExpressionEngine: return new RuleExpressionEngine(rule); break;
      default: throw new Error('Expression engine not found');
    }
  }
}
