import { Parser } from '../../src/tokenizer/parser';
import { Token } from '../../src/tokenizer/token';

describe('Parser', () => {
  const ruleOR = "$deviceGroup='ABC143' | $deviceType='TV'";

  const validTokensOR = [
    {
      type: 'VAR',
      value: '$deviceGroup'
    },
    {
      type: 'OP',
      value: '='
    },
    {
      type: 'VAR_VALUE',
      value: "'ABC143'"
    },
    {
      type: 'OP',
      value: '|'
    },
    {
      type: 'VAR',
      value: '$deviceType'
    },
    {
      type: 'OP',
      value: '='
    },
    {
      type: 'VAR_VALUE',
      value: "'TV'"
    },
    {
      type: 'EOF'
    }
  ];


  describe('Parser', () => {
    it('Parse rule correctly defined - $deviceGroup=\'ABC143\' | $deviceType=\'TV\'', () => {
      const ast = new Parser().parse(ruleOR);
      console.log(`AST: ${JSON.stringify(ast, null, 2)}`);
    });
  });
});
