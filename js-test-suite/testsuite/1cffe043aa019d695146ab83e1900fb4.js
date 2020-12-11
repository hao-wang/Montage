load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 21.1.3.13
description: >
  Throws a RangeError if count < 0
info: >
  21.1.3.13 String.prototype.repeat ( count )

  6. If n < 0, throw a RangeError exception.
---*/

assert.throws(RangeError, function() {
  ''.repeat(-1);
});

assert.throws(RangeError, function() {
  ''.repeat(-Infinity);
});
