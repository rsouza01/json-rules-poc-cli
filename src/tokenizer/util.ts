const variableNameRegex = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
const variableValueRegex = /\'(.*?)\'|\"(.*?)\"/;
const operators = ['=', '+', '-', '*', '/', '>', '<', '>=', '<=', '==', '!=', '&', '|', 'in'];


export function isVariable(v): boolean {
  return typeof v === "string" && v.length <= 20 && variableNameRegex.test(v);
}

export function isVariableValue(v): boolean {
  return typeof v === "string" && variableValueRegex.test(v);
}

export function isNumber(v): boolean {
  return !isNaN(parseFloat(v)) && isFinite(v);
}

export function isOperator(v): boolean {
  for (let i = 0; i < operators.length; i++) {
    if (operators[i] === v) return true;
  }
  return false;
}
