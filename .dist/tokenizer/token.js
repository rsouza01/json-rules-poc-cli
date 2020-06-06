import { isNumber, isOperator, isVariable, isVariableValue } from './util';
let Token = /** @class */ (() => {
    class Token {
        constructor() {
            this.tokens = [];
        }
        static getInst() {
            if (!this.inst) {
                this.inst = new Token();
            }
            return this.inst;
        }
        numeric_tokenize(str) {
            str = str.trim();
            var s = '';
            for (var index = 0; index < str.length; index++) {
                s += str[index];
                const peek = str[index + 1];
                if (isNumber(s.trim()) && !isNumber(peek)) {
                    this.tokens.push({ type: 'NUM', value: s.trim() });
                    s = '';
                }
                if (s.trim() == '(' || s.trim() == ')') {
                    s.trim() == '(' ? this.tokens.push({ type: 'LPAREN' }) : this.tokens.push({ tyeratorpe: 'RPAREN' });
                    s = '';
                }
                if (isOperator(s.trim()) && !isOperator(peek)) {
                    this.tokens.push({ type: 'OP', value: s.trim() });
                    s = '';
                }
                if (s == ';' || s == '\n') {
                    this.tokens.push({ type: 'EOL' });
                    s = '';
                }
                if (index == (str.length - 1)) {
                    this.tokens.push({ type: 'EOF' });
                    s = '';
                }
            }
            return this.tokens;
        }
        tokenize(str) {
            str = str.trim();
            var s = '';
            for (var index = 0; index < str.length; index++) {
                s += str[index];
                const peek = str[index + 1];
                if (isVariable(s.trim()) && !isVariable(peek)) {
                    this.tokens.push({ type: 'VAR', value: s.trim() });
                    s = '';
                }
                if (isVariableValue(s.trim()) && !isVariableValue(peek)) {
                    this.tokens.push({ type: 'VAR_VALUE', value: s.trim() });
                    s = '';
                }
                if (isNumber(s.trim()) && !isNumber(peek)) {
                    this.tokens.push({ type: 'NUM', value: s.trim() });
                    s = '';
                }
                if (s.trim() == '(' || s.trim() == ')') {
                    s.trim() == '(' ? this.tokens.push({ type: 'LPAREN' }) : this.tokens.push({ type: 'RPAREN' });
                    s = '';
                }
                if (isOperator(s.trim()) && !isOperator(peek)) {
                    this.tokens.push({ type: 'OP', value: s.trim() });
                    s = '';
                }
                if (s == ';' || s == '\n') {
                    this.tokens.push({ type: 'EOL' });
                    s = '';
                }
                if (index == (str.length - 1)) {
                    this.tokens.push({ type: 'EOF' });
                    s = '';
                }
            }
            return this.tokens;
        }
    }
    Token.inst = null;
    return Token;
})();
export { Token };
//# sourceMappingURL=token.js.map