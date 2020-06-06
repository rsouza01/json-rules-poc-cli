import { Token } from './token';
import { Binary, Literal, Grouping } from './ast';
export class Parser {
    constructor() {
        this.index = 0;
        this.tokens = null;
        this.expr = [];
    }
    static getInst() {
        if (!this.inst) {
            this.inst = new Parser();
        }
        return this.inst;
    }
    advance() {
        this.index++;
    }
    peep() { return this.tokens(this.index + 1); }
    current() { return this.tokens[this.index]; }
    parse(str) {
        const tokenizer = Token.getInst();
        this.tokens = tokenizer.tokenize(str);
        console.log(`TOKENS: ${JSON.stringify(this.tokens, null, 2)}`);
        while (this.current().type != 'EOF') {
            const expr = this.add();
            if (expr) {
                this.expr.push(expr);
            }
        }
        console.log(`EXPR: ${JSON.stringify(this.expr, null, 2)}`);
        return this.expr;
    }
    add() {
        const left = this.sub();
        if (this.current().value === '+') {
            this.advance();
            return new Binary(left, 'ADD', this.sub());
        }
        return left;
    }
    sub() {
        const left = this.mul();
        if (this.current().value == '-') {
            this.advance();
            return new Binary(left, 'SUB', this.mul());
        }
        return left;
    }
    mul() {
        const left = this.all();
        if (this.current().value == '*') {
            this.advance();
            return new Binary(left, 'MUL', this.all());
        }
        return left;
    }
    all() {
        const left = this.primary();
        switch (this.current().value) {
            case '>=':
                this.advance();
                return new Binary(left, 'GREATER_EQUAL', this.add());
            case '<=':
                this.advance();
                return new Binary(left, 'LESS_EQUAL', this.add());
            case '=':
                this.advance();
                return new Binary(left, 'EQUAL_EQUAL', this.add());
            case '>':
                this.advance();
                return new Binary(left, 'GREATER_THAN', this.add());
            case '<':
                this.advance();
                return new Binary(left, 'LESS_THAN', this.add());
            case '!=':
                this.advance();
                return new Binary(left, 'BANG_EQUAL', this.add());
            case '|':
                this.advance();
                return new Binary(left, 'OR', this.add());
            case '&':
                this.advance();
                return new Binary(left, 'AND', this.add());
            default:
                break;
        }
        return left;
    }
    primary() {
        const curr = this.current();
        this.advance();
        if (curr.type == 'NUM') {
            return new Literal(curr.value);
        }
        if (curr.type == 'LPAREN') {
            const expr = this.add();
            this.advance();
            return new Grouping(expr);
        }
    }
}
//# sourceMappingURL=parser.js.map