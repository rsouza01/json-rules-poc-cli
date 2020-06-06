// ast.js

export class Binary {
  private left: any;
  private right: any;
  private operator: any;

  constructor(left, operator, right) {
      this.left = left;
      this.right = right;
      this.operator = operator;
  }

  visit(visitor) {
      return visitor.visitBinary(this);
  }
}

export class Literal {
  private value: any;

  constructor(value) {
      this.value = value;
  }

  visit(visitor) {
      return visitor.visitLiteral(this);
  }
}

export class Variable {
  private value: any;

  constructor(value) {
      this.value = value;
  }

  visit(visitor) {
      return visitor.visitVariable(this);
  }
}

export class VariableValue {
  private value: any;

  constructor(value) {
      this.value = value;
  }

  visit(visitor) {
      return visitor.visitVariableValue(this);
  }
}

export class Grouping {
  private expr: any;

  constructor(expr) {
      this.expr = expr;
  }
  visit(visitor) {
      return visitor.visitGrouping(this);
  }
}
