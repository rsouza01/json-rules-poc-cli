import {
  describe, it
} from 'mocha';
import * as chai from 'chai';

import { ExpressionEngineTypes, ExpressionEngineFactory } from '../../src/expressionengine/expressionenginefactory';

const { expect } = chai;

describe('ExpressionEngineFactory', () => {

  const rule: string = '$device = 1';

  it('Should instantiate a RuleExpressionEngine', async () => {
    const engine =
      ExpressionEngineFactory.createExpressionEngine(ExpressionEngineTypes.RuleExpressionEngine, rule);
    // console.log(`Engine: ${JSON.stringify(engine, null, 2)}`);
    // console.log(`Engine type: ${engine.constructor.name}`);

    expect(engine).to.be.a('object');
  });

  it('Should throw an error for indefinite type', async () => {
    expect(() => {
      ExpressionEngineFactory
      .createExpressionEngine(ExpressionEngineTypes.InvalidEngine, rule);
    }).to.throw(Error, 'Expression engine not found');
  });
});
