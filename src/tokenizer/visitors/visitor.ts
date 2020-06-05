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


export class Visitor {

  visitBinary(ctx) {
      const type = ctx.operator
      switch (type) {
          case 'ADD':
              return ctx.left.visit(this) + ctx.right.visit(this);
          case 'SUB':
              return ctx.left.visit(this) - ctx.right.visit(this);
          case 'MUL':
              return ctx.left.visit(this) * ctx.right.visit(this);
          case 'DIV':
              return ctx.left.visit(this) / ctx.right.visit(this);
          case 'LESS_THAN':
              return ctx.left.visit(this) < ctx.right.visit(this);
          case 'GREATER_THAN':
              return ctx.left.visit(this) > ctx.right.visit(this);
          case 'LESS_EQUAL':
              return ctx.left.visit(this) <= ctx.right.visit(this);
          case 'GREATER_EQUAL':
              return ctx.left.visit(this) >= ctx.right.visit(this);
          case 'EQUAL_EQUAL':
              return ctx.left.visit(this) == ctx.right.visit(this);
          case 'BANG_EQUAL':
              return ctx.left.visit(this) != ctx.right.visit(this);
      }
  }

  visitLiteral(ctx) {
      return Number(ctx.value);
  }

  visitGrouping(expr) {
      const e = expr.expr;
          // log(expr)
      return e.visit(this);
  }

  visitExpressions(expressions) {
      for (const expr of expressions) {
          console.log(`expr.visit: ${JSON.stringify(expr.visit(this))}`)
      }
  }
}
