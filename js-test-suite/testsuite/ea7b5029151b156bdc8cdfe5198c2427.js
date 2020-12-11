load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 13.6.4.13
description: >
    Control flow during body evaluation should honor `yield` statements.
features: [generators]
---*/

function* values() {
  yield 1;
  yield 1;
}
var dataIterator = values();
var controlIterator = (function*() {
  for (var x of dataIterator) {
    i++;
    yield;
    j++;
  }

  k++;
})();
var i = 0;
var j = 0;
var k = 0;

controlIterator.next();
assert.sameValue(i, 1, 'First iteration: pre-yield');
assert.sameValue(j, 0, 'First iteration: post-yield');
assert.sameValue(k, 0, 'First iteration: post-for-of');

controlIterator.next();
assert.sameValue(i, 2, 'Second iteration: pre-yield');
assert.sameValue(j, 1, 'Second iteration: post-yield');
assert.sameValue(k, 0, 'Second iteration: post-for-of');

controlIterator.next();
assert.sameValue(i, 2, 'Third iteration: pre-yield');
assert.sameValue(j, 2, 'Third iteration: post-yield');
assert.sameValue(k, 1, 'Third iteration: post-for-of');
