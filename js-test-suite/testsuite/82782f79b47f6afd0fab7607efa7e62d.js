load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// This file was procedurally generated from the following sources:
// - src/annex-b-fns/global-exsting-fn-no-init.case
// - src/annex-b-fns/global/switch-dflt.template
/*---
description: Existing variable binding is not modified (Funtion declaration in the `default` clause of a `switch` statement in the global scope)
esid: sec-web-compat-globaldeclarationinstantiation
es6id: B.3.3.2
flags: [generated, noStrict]
info: |
    B.3.3.2 Changes to GlobalDeclarationInstantiation

    [...]
    1. Let fnDefinable be ? envRec.CanDeclareGlobalFunction(F).
    2. If fnDefinable is true, then
---*/
assert.sameValue(f(), 'outer declaration');

switch (1) {
  default:
    function f() { return 'inner declaration'; }
}

function f() {
  return 'outer declaration';
}
