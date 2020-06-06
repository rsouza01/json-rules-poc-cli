import { Token } from '../../src/tokenizer/token';

describe('Tokenizer', () => {
  describe('Called with valid rules', () => {
    beforeEach(() => {
    });

    it.only('Should return correct response for expression $deviceGroup=\'ABC143\'', () => {
      // const rule = '123-4';
      // const rule = "$deviceGroup='ABC143'";
      const rule = "deviceGroup='ABC143'";

      console.log(`RULE: ${rule}`);
      const tokens = Token.getInst().tokenize(rule);
      console.log(`TOKENS: ${JSON.stringify(tokens, null, 2)}`);
      console.log('------------------------------------------------------------------------');
    });
  });
});
