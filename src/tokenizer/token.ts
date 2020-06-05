import { isNum, isOp } from './util';

export class Token {
  static inst: Token = null;
  private tokens: any;

  constructor() {
    this.tokens = [];
  }

  static getInst(): Token {
    if (!this.inst) {
      this.inst = new Token();
    }
    return this.inst;
  }

  tokenize(str: string): [] {
    str = str.trim();
    var s = '';
    for (var index = 0; index < str.length; index++) {
      s += str[index];
      const peek = str[index + 1];
      if (isNum(s.trim()) && !isNum(peek)) {
        this.tokens.push({ type: 'NUM', value: s.trim() });
        s = '';
      }
      if (s.trim() == '(' || s.trim() == ')') {
        s.trim() == '(' ? this.tokens.push({ type: 'LPAREN' }) : this.tokens.push({ type: 'RPAREN' });
        s = '';
      }
      if (isOp(s.trim()) && !isOp(peek)) {
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
