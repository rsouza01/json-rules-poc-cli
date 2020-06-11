/**
 *  Binary Expressions
 *  *,/,-,+,>,<,>=,<=,==,!=
 *
 *  Logical Expressions
 *  &, |
 *
 *  Unary Expressions
 *  ! -
 */

import { realpathSync } from "fs";

function buildFact(fact, operator, value) {
  return {
    fact,
    operator,
    value,
  };
}

export default class RuleVisitor {
  visitBinary(ctx) {
    let operator: string = "";

    switch (ctx.operator) {
      case "ADD":
        operator = "plus";
        break;
      case "SUB":
        operator = "sub";
        break;
      case "MUL":
        operator = "mul";
        break;
      case "DIV":
        operator = "div";
        break;
      case "LESS_THAN":
        operator = "lessThan";
        break;
      case "GREATER_THAN":
        operator = "greaterThan";
        break;
      case "LESS_EQUAL":
        operator = "lessEqualThan";
        break;
      case "GREATER_EQUAL":
        operator = "greaterEqualThan";
        break;
      case "EQUAL_EQUAL":
        operator = "equal";
        break;
      case "BANG_EQUAL":
        operator = "different";
        break;
      case "OR":
        operator = "any";
        break;
      case "AND":
        operator = "all";
        break;
      default:
        console.error(
          `OPERATOR NOT RECOGNIZED: \'${JSON.stringify(ctx.operator, null, 2)}\'`
        );
        throw new Error(`OPERATOR NOT RECOGNIZED: \'${JSON.stringify(ctx.operator, null, 2)}\'`);
    }
    return buildFact(ctx.left.visit(this), operator, ctx.right.visit(this));
  }

  visitLiteral(ctx) {
    return Number(ctx.value);
  }

  visitVariable(ctx) {
    return String(ctx.value);
  }

  visitVariableValue(ctx) {
    return String(ctx.value);
  }

  visitGrouping(expr) {
    const e = expr.expr;
    return e.visit(this);
  }

  visitExpressions(expressions): any {
    // console.log(`EXPRESSIONS: ${JSON.stringify(expressions, null, 2)}`);
    const result: any[] = [];

    for (const expr of expressions) {
      result.push(expr.visit(this));
    }

    return result;
  }
}
