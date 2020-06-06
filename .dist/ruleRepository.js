import FileUtils from './utils/fileUtils';
import { Token } from './tokenizer/token';
import { Parser } from './tokenizer/parser';
import { Evaluator } from './tokenizer/evaluator';
export class JSONRuleRepository {
    constructor(rulesFilePath) {
        this.rules = FileUtils.loadFile(rulesFilePath);
    }
    async loadRules(fact) {
        return this.rules.filter(element => {
            return element.organization !== undefined && element.proposition !== undefined &&
                element.organization === fact.organization &&
                element.proposition === fact.proposition;
        });
    }
}
export class ExpressionRuleRepository {
    constructor(rulesFilePath) {
        this.rules = FileUtils.loadFile(rulesFilePath);
    }
    async loadRules(fact) {
        // const rule = '89 * 78 & 1 + 2';
        // const rule = this.rules[0].rule_expression
        // const rule = "$deviceGroup='ABC143' and $deviceType='TV' and $country in ['NL', 'BE']",
        const rule = "$deviceGroup='ABC143'";
        console.log(`RULE: ${rule}`);
        const tokens = Token.getInst().tokenize(rule);
        console.log(`TOKENS: ${JSON.stringify(tokens, null, 2)}`);
        console.log('------------------------------------------------------------------------');
        const ast = new Parser().parse(rule);
        console.log(`AST: ${JSON.stringify(ast, null, 2)}`);
        console.log('------------------------------------------------------------------------');
        const evalRet = new Evaluator(ast).evaluate();
        console.log(`EVAL_RET: ${JSON.stringify(evalRet, null, 2)}`);
        console.log('------------------------------------------------------------------------');
        return [];
    }
}
//# sourceMappingURL=ruleRepository.js.map