load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 13.6.4.13
description: >
    Control flow during body evaluation should honor `throw` statements.
features: [generators]
---*/

function* values() {
  yield 1;
  $ERROR('This code is unreachable (following `yield` statement).');
}
var CustomError = function() {};
var iterator = values();
var i = 0;
var error = new CustomError();

assert.throws(CustomError, function() {
  for (var x of iterator) {
    i++;
    throw error;

    $ERROR('This code is unreachable (following `throw` statement).');
  }

  $ERROR('This code is unreachable (following `for..in` statement).');
});

assert.sameValue(i, 1);
