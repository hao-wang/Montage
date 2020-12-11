load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: Abrupt completion returned by "resolve" capability
esid: sec-promise.resolve
es6id: 25.4.4.5
info: |
    1. Let C be the this value.
    [...]
    4. Let promiseCapability be ? NewPromiseCapability(C).
    5. Perform ? Call(promiseCapability.[[Resolve]], undefined, « x »).

    25.4.1.5 NewPromiseCapability
    [...]
    6. Let promise be Construct(C, «executor»).
    7. ReturnIfAbrupt(promise).
---*/

var P = function(executor) {
  return new Promise(function() {
    executor(
      function() {
        throw new Test262Error();
      },
      function() {}
    );
  });
};

assert.throws(Test262Error, function() {
  Promise.resolve.call(P);
});
