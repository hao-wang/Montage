load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// This file was procedurally generated from the following sources:
// - src/annex-b-fns/eval-func-skip-early-err.case
// - src/annex-b-fns/eval-func/direct-if-decl-else-stmt.template
/*---
description: Extension not observed when creation of variable binding would produce an early error (IfStatement with a declaration in the first statement position in eval code)
esid: sec-functiondeclarations-in-ifstatement-statement-clauses
es6id: B.3.4
flags: [generated, noStrict]
info: |
    The following rules for IfStatement augment those in 13.6:

    IfStatement[Yield, Return]:
        if ( Expression[In, ?Yield] ) FunctionDeclaration[?Yield] else Statement[?Yield, ?Return]
        if ( Expression[In, ?Yield] ) Statement[?Yield, ?Return] else FunctionDeclaration[?Yield]
        if ( Expression[In, ?Yield] ) FunctionDeclaration[?Yield] else FunctionDeclaration[?Yield]
        if ( Expression[In, ?Yield] ) FunctionDeclaration[?Yield]


    B.3.3.3 Changes to EvalDeclarationInstantiation

    [...]
    ii. If replacing the FunctionDeclaration f with a VariableStatement that
        has F as a BindingIdentifier would not produce any Early Errors for
        body, then
    [...]
---*/
var init, after;

(function() {
  eval(
    'let f = 123;\
    init = f;if (true) function f() {  } else ;after = f;'
  );
}());

assert.sameValue(init, 123, 'binding is not initialized to `undefined`');
assert.sameValue(after, 123, 'value is not updated following evaluation');