load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// This file was procedurally generated from the following sources:
// - src/dstr-binding/ary-ptrn-elem-ary-elision-init.case
// - src/dstr-binding/default/try.template
/*---
description: BindingElement with array binding pattern and initializer is used (try statement)
esid: sec-runtime-semantics-catchclauseevaluation
es6id: 13.15.7
features: [generators, destructuring-binding]
flags: [generated]
info: |
    Catch : catch ( CatchParameter ) Block

    [...]
    5. Let status be the result of performing BindingInitialization for
       CatchParameter passing thrownValue and catchEnv as arguments.
    [...]

    13.3.3.6 Runtime Semantics: IteratorBindingInitialization

    BindingElement : BindingPatternInitializer opt

    [...]
    2. If iteratorRecord.[[done]] is true, let v be undefined.
    3. If Initializer is present and v is undefined, then
       a. Let defaultValue be the result of evaluating Initializer.
       b. Let v be ? GetValue(defaultValue).
    4. Return the result of performing BindingInitialization of BindingPattern
       with v and environment as the arguments.

---*/
var first = 0;
var second = 0;
function* g() {
  first += 1;
  yield;
  second += 1;
};

var ranCatch = false;

try {
  throw [];
} catch ([[,] = g()]) {
  assert.sameValue(first, 1);
  assert.sameValue(second, 0);
  ranCatch = true;
}

assert(ranCatch, 'executed `catch` block');
