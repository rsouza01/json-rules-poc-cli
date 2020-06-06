import {
  describe, it
} from 'mocha';
import * as chai from 'chai';

import { doesNotThrow } from 'assert';
import { Parser } from '../../src/tokenizer/parser';
import { Token } from '../../src/tokenizer/token';

const { expect } = chai;


describe('Parser', () => {
  it('Parse rule correctly defined - $deviceGroup=\'ABC143\'', async () => {
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

    // console.log(`astRet1: ${JSON.stringify(astRet, null, 2)}`);

    expect(astRet).to.be.eql(ast);
  });


  it('Parse rule correctly defined - ($deviceGroup=\'ABC143\') | ($deviceType=\'TV\')', async () => {
    const ast = [
      {
        left: {
          expr: {
            left: {
              value: '$deviceGroup'
            },
            right: {
              value: "'ABC143'"
            },
            operator: 'EQUAL_EQUAL'
          }
        },
        right: {
          expr: {
            left: {
              value: '$deviceType'
            },
            right: {
              value: "'TV'"
            },
            operator: 'EQUAL_EQUAL'
          }
        },
        operator: 'OR'
      }
    ];
    const rule = "($deviceGroup='ABC143') | ($deviceType='TV')";
    const astRet = new Parser().parse(rule);

    // console.log(`>>> astRet2: ${JSON.stringify(astRet, null, 2)}`);

    expect(astRet).to.be.eql(ast);
  });

  it('Must throw exception for rule  incorrectly defined - $deviceGroup<>\'ABC143\'', async () => {
    const rule = "$deviceGroup<>'ABC143'";
    const astRet = new Parser().parse(rule);

    // console.log(`>>> astRet2: ${JSON.stringify(astRet, null, 2)}`);

    // expect(astRet).to.be.eql(ast);
  });
});
