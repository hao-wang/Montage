load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// This file was procedurally generated from the following sources:
// - src/dstr-assignment/obj-prop-elem-init-assignment-undef.case
// - src/dstr-assignment/default/assignment-expr.template
/*---
description: If the Initializer is present and v is undefined, the Initializer should be evaluated and the result assigned to the target reference (undefined value) (AssignmentExpression)
esid: sec-variable-statement-runtime-semantics-evaluation
es6id: 13.3.2.4
features: [destructuring-binding]
flags: [generated]
info: |
    VariableDeclaration : BindingPattern Initializer

    1. Let rhs be the result of evaluating Initializer.
    2. Let rval be GetValue(rhs).
    3. ReturnIfAbrupt(rval).
    4. Return the result of performing BindingInitialization for
       BindingPattern passing rval and undefined as arguments.
---*/
var x;

var result;
var vals = { y: undefined };

result = { y: x = 1 } = vals;

assert.sameValue(x, 1);

assert.sameValue(result, vals);
