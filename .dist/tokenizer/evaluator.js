import RuleVisitor from './visitors/rulevisitor';
// evaluator.js
export class Evaluator {
    constructor(asts) {
        this.asts = asts;
        this.visitor = new RuleVisitor();
    }
    evaluate() {
        console.log('================================ RESULTS ===============================');
        return this.visitor.visitExpressions(this.asts);
    }
}
//# sourceMappingURL=evaluator.js.map