load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("352fc54052b657308832185e13cd17c9.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.prototype.map
description: >
  callbackfn `this` value
info: >
  22.2.3.19 %TypedArray%.prototype.map ( callbackfn [ , thisArg ] )

  ...
  5. If thisArg was supplied, let T be thisArg; else let T be undefined.
  ...
  8. Repeat, while k < len
    ...
    c. Let mappedValue be ? Call(callbackfn, T, « kValue, k, O »).
    ...
includes: [testTypedArray.js]
---*/

var expected = (function() { return this; })();
var thisArg = {};

testWithTypedArrayConstructors(function(TA) {
  var sample = new TA(3);

  var results1 = [];

  sample.map(function() {
    results1.push(this);
    return 0;
  });

  assert.sameValue(results1.length, 3, "results1");
  assert.sameValue(results1[0], expected, "without thisArg - [0]");
  assert.sameValue(results1[1], expected, "without thisArg - [1]");
  assert.sameValue(results1[2], expected, "without thisArg - [2]");

  var results2 = [];

  sample.map(function() {
    results2.push(this);
    return 0;
  }, thisArg);

  assert.sameValue(results2.length, 3, "results2");
  assert.sameValue(results2[0], thisArg, "using thisArg - [0]");
  assert.sameValue(results2[1], thisArg, "using thisArg - [1]");
  assert.sameValue(results2[2], thisArg, "using thisArg - [2]");
});