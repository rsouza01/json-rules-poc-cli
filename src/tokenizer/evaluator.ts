import RuleVisitor from './visitors/rulevisitor';
import Visitor from './visitors/visitor';


// evaluator.js
export class Evaluator {
  private asts: any;
  private visitor: any;

  constructor(asts, visitor) {
      this.asts = asts;
      this.visitor = visitor;
  }
  evaluate(): any {
      return this.visitor.visitExpressions(this.asts);
  }
}
