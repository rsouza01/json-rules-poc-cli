import { Parser } from '../../src/tokenizer/parser';
import { Token } from '../../src/tokenizer/token';

describe('Parser', () => {
  const rule = "$deviceGroup='ABC143'";
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
  /*
AST: [
  {
    "left": {
      "value": "12"
    },
    "right": {
      "value": "3"
    },
    "operator": "ADD"
  }
]
*/

  describe('Parser', () => {
    it.only('Parse rule correctly defined - $deviceGroup=\'ABC143\'', () => {
      const ast = new Parser().parse(rule);
      // const ast = new Parser().parse('12+3');
      console.log(`AST: ${JSON.stringify(ast, null, 2)}`);
    });
  });
});
