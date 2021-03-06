load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 22.1.3.8
description: >
  Predicate thisArg as F.call( thisArg, kValue, k, O ) for each array entry.
info: >
  22.1.3.8 Array.prototype.find ( predicate[ , thisArg ] )

  ...
  8. Repeat, while k < len
    ...
    d. Let testResult be ToBoolean(Call(predicate, T, «kValue, k, O»)).
    e. ReturnIfAbrupt(testResult).
  ...
flags: [noStrict]
---*/

var result;

[1].find(function(kValue, k, O) {
  result = this;
});

assert.sameValue(result, this);

var o = {};
[1].find(function() {
  result = this;
}, o);

assert.sameValue(result, o);
