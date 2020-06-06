const variableNameRegex = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
const variableValueRegex = /\'(.*?)\'|\"(.*?)\"/;
const operators = ['=', '+', '-', '*', '/', '>', '<', '>=', '<=', '==', '!=', '&', '|', 'in'];
export function isVariable(v) {
    return typeof v === "string" && v.length <= 20 && variableNameRegex.test(v);
}
export function isVariableValue(v) {
    return typeof v === "string" && variableValueRegex.test(v);
}
export function isNumber(v) {
    return !isNaN(parseFloat(v)) && isFinite(v);
}
export function isOperator(v) {
    for (let i = 0; i < operators.length; i++) {
        if (operators[i] === v)
            return true;
    }
    return false;
}
//# sourceMappingURL=util.js.map