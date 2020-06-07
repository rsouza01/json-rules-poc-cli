import {
  describe, it
} from 'mocha';
import * as chai from 'chai';

import { doesNotThrow } from 'assert';
import { Parser } from '../../src/tokenizer/parser';
import { Evaluator } from '../../src/tokenizer/evaluator';
import RuleVisitor from '../../src/tokenizer/visitors/rulevisitor';

const { expect } = chai;


describe('Evaluator', () => {
  it('', async () => {
  });

  it.only('Evaluate rule correctly defined - $deviceGroup=\'ABC143\'', async () => {

    /** TODO: Should be mocked - Quick and dirty approach for now */
    const rule: string = "$deviceGroup='ABC143'";
    const ast = new Parser().parse(rule);

    const evalValue: any[] = [
      {
        "fact": "$deviceGroup",
        "operator": "equals",
        "value": "'ABC143'"
      }
    ];

    const evalRet: any[] = new Evaluator(ast, new RuleVisitor()).evaluate();
    expect(evalRet).to.be.eql(evalValue);
    // console.log(`EVAL_RET: ${JSON.stringify(evalRet, null, 2)}`);
    // console.log('------------------------------------------------------------------------');
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
  });
});
