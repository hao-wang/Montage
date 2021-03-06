load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2013 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
  description: >
      `return` is a valid statement within generator function bodies.
  es6id: 14.4
 ---*/

function* g1() { return; }
function* g2() { return 1; }

var result = g1().next();
assert.sameValue(result.value, undefined);
assert.sameValue(result.done, true);

result = g2().next();
assert.sameValue(result.value, 1);
assert.sameValue(result.done, true);
