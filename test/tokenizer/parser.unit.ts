import {
  describe, it
} from 'mocha';
import * as chai from 'chai';

import { Parser } from '../../src/tokenizer/parser';
import { Token } from '../../src/tokenizer/token';

const { expect } = chai;


describe('Parser', () => {
  describe('Parser', () => {
    it('Parse rule correctly defined - $deviceGroup=\'ABC143\'', () => {
      const ast = [
        {
          left: {
            value: '$deviceGroup'
          },
          right: {
            value: "'ABC143'"
          },
          operator: 'EQUAL_EQUAL'
        }
      ];

      const rule = "$deviceGroup='ABC143'";
      const astRet = new Parser().parse(rule);

      expect(astRet).to.be.eql(ast);
    });
  });

  it.only('Parse rule correctly defined - $deviceGroup=\'ABC143\'', () => {
    const ast = [
      {
        left: {
          value: '$deviceGroup'
        },
        right: {
          left: {
            value: "'ABC143'"
          },
          right: {
            left: {
              value: '$deviceType'
            },
            right: {
              value: "'TV'"
            },
            operator: 'EQUAL_EQUAL'
          },
          operator: 'OR'
        },
        operator: 'EQUAL_EQUAL'
      }
    ];
    const rule = "$deviceGroup='ABC143' | $deviceType='TV'";

    const astRet = new Parser().parse(rule);

    console.log(`astRet = ${JSON.stringify(astRet, null, 2)}`);

    // expect(astRet).to.be.eql(ast);
  });
});
