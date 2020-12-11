load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// This file was procedurally generated from the following sources:
// - src/annex-b-fns/eval-global-skip-early-err.case
// - src/annex-b-fns/eval-global/indirect-switch-dflt.template
/*---
description: Extension not observed when creation of variable binding would produce an early error (Funtion declaration in the `default` clause of a `switch` statement in eval code in the global scope)
esid: sec-web-compat-evaldeclarationinstantiation
es6id: B.3.3.3
flags: [generated, noStrict]
info: |
    B.3.3.3 Changes to EvalDeclarationInstantiation

    [...]
    ii. If replacing the FunctionDeclaration f with a VariableStatement that
        has F as a BindingIdentifier would not produce any Early Errors for
        body, then
    [...]
---*/

(0,eval)(
  'let f = 123;\
  assert.sameValue(f, 123, "binding is not initialized to `undefined`");switch (1) {' +
  '  default:' +
  '    function f() {  }' +
  '}\
  assert.sameValue(f, 123, "value is not updated following evaluation");'
);
