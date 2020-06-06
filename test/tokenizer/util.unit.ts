import {
  describe, before, after, it
} from 'mocha';
import * as chai from 'chai';

import {
  isNumber, isOperator, isVariable, isVariableValue
} from '../../src/tokenizer/util';

const { expect } = chai;

describe('Util functions', () => {
  describe('isVariable', () => {
    it('Should evaluate TRUE for variable name $ABC', () => {
      const varName = '$ABC';
      const isVariableName = isVariable(varName);
      expect(isVariableName).to.be.true;
    });

    it('Should evaluate TRUE for variable name ABC', () => {
      const varName = 'ABC';
      const isVariableName = isVariable(varName);
      expect(isVariableName).to.be.true;
    });

    it('Should evaluate TRUE for variable name ABC_123', () => {
      const varName = 'ABC_123';
      const isVariableName = isVariable(varName);
      expect(isVariableName).to.be.true;
    });

    it('Should evaluate FALSE for variable name ABC-123', () => {
      const varName = 'ABC-123';
      const isVariableName = isVariable(varName);
      expect(isVariableName).to.be.false;
    });

    it('Should evaluate TRUE for variable name $variable_123', () => {
      const varName = '$variable_123';
      const isVariableName = isVariable(varName);
      expect(isVariableName).to.be.true;
    });

    it('Should evaluate FALSE for variable name $variable-123', () => {
      const varName = '$variable-123';
      const isVariableName = isVariable(varName);
      expect(isVariableName).to.be.false;
    });

    it('Should evaluate FALSE for variable name $123', () => {
      const varName = '$123';
      const isVariableName = isVariable(varName);
      expect(isVariableName).to.be.true;
    });

    it('Should evaluate TRUE for variable name ABC', () => {
      const varName = 'ABC';
      const isVariableName = isVariable(varName);
      expect(isVariableName).to.be.true;
    });
  });

  describe('isVariableValue', () => {
    it('Should evaluate TRUE for variable value \'123\'', () => {
      const varValue = '\'123\'';
      const isValidValue = isVariableValue(varValue);
      expect(isValidValue).to.be.true;
    });

    it('Should evaluate TRUE for variable value \"123\"', () => {
      const varValue = '\'123\'';
      const isValidValue = isVariableValue(varValue);
      expect(isValidValue).to.be.true;
    });
  });
});
