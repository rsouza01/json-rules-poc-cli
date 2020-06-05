import { RuleVisitor } from './rulevisitor';


// evaluator.js
export class Evaluator {
  private asts: any;
  private visitor: any;

  constructor(asts) {
      this.asts = asts;
      this.visitor = new RuleVisitor();
  }
  evaluate() {
      console.log('======================== RESULTS ========================')
      this.visitor.visitExpressions(this.asts)
  }
}
