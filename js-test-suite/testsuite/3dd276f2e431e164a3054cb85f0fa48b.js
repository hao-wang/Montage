load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// This file was procedurally generated from the following sources:
// - src/dstr-assignment/obj-prop-elem-init-fn-name-fn.case
// - src/dstr-assignment/default/assignment-expr.template
/*---
description: Assignment of function `name` attribute (FunctionExpression) (AssignmentExpression)
esid: sec-variable-statement-runtime-semantics-evaluation
es6id: 13.3.2.4
features: [destructuring-binding]
flags: [generated]
includes: [propertyHelper.js]
info: |
    VariableDeclaration : BindingPattern Initializer

    1. Let rhs be the result of evaluating Initializer.
    2. Let rval be GetValue(rhs).
    3. ReturnIfAbrupt(rval).
    4. Return the result of performing BindingInitialization for
       BindingPattern passing rval and undefined as arguments.

    AssignmentElement[Yield] : DestructuringAssignmentTarget Initializeropt
    [...] 7. If Initializer is present and v is undefined and
       IsAnonymousFunctionDefinition(Initializer) and IsIdentifierRef of
       DestructuringAssignmentTarget are both true, then
       a. Let hasNameProperty be HasOwnProperty(rhsValue, "name").
       b. ReturnIfAbrupt(hasNameProperty).
       c. If hasNameProperty is false, perform SetFunctionName(rhsValue,
          GetReferencedName(lref)).

---*/
var xFn, fn;

var result;
var vals = {};

result = { x: xFn = function x() {}, x: fn = function() {} } = vals;

assert.notSameValue(xFn.name, 'xFn');

assert.sameValue(fn.name, 'fn');
verifyNotEnumerable(fn, 'name');
verifyNotWritable(fn, 'name');
verifyConfigurable(fn, 'name');

assert.sameValue(result, vals);
