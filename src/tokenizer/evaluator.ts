import RuleVisitor from './visitors/rulevisitor';


// evaluator.js
export class Evaluator {
  private asts: any;
  private visitor: any;

  constructor(asts) {
      this.asts = asts;
      this.visitor = new RuleVisitor();
  }
  evaluate() {
      console.log('================================ RESULTS ===============================')

      return this.visitor.visitExpressions(this.asts);
  }
}
