// util.js
export function isNum(v) {
  return !isNaN(parseFloat(v)) && isFinite(v)
}

// util.js
const operators = ['=', '+', '-', '*', '/', '>', '<', '>=', '<=', '==', '!=', '&', '|', 'in']
export function isOp(v) {
  for (var i = 0; i < operators.length; i++) {
      if (operators[i] == v) return true
  }
  return false
}
