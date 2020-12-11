load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 13.6.4.13 S5.n
description: >
    Control flow during body evaluation should honor `break` statements within
    `finally` blocks.
features: [generators]
---*/

function* values() {
  yield 1;
  $ERROR('This code is unreachable (following `yield` statement).');
}
var iterator = values();
var i = 0;

for (var x of iterator) {
  try {
  } finally {
    i++;
    break;

    $ERROR('This code is unreachable (following `break` statement).');
  }

  $ERROR('This code is unreachable (following `try` statement).');
}

assert.sameValue(i, 1);
