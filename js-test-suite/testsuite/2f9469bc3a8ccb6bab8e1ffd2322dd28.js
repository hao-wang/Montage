load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("352fc54052b657308832185e13cd17c9.js");
load("67475d6f299e80572167f8e325dacbed.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.prototype.set-array-offset
description: >
  Type conversions on ToNumber(src property value)
info: >
  22.2.3.23.1 %TypedArray%.prototype.set (array [ , offset ] )

  1. Assert: array is any ECMAScript language value other than an Object with a
  [[TypedArrayName]] internal slot. If it is such an Object, the definition in
  22.2.3.23.2 applies.
  ...
  21. Repeat, while targetByteIndex < limit
    a. Let Pk be ! ToString(k).
    b. Let kNumber be ? ToNumber(? Get(src, Pk)).
    c. If IsDetachedBuffer(targetBuffer) is true, throw a TypeError exception.
    d. Perform SetValueInBuffer(targetBuffer, targetByteIndex, targetType,
    kNumber).
  ...
includes: [testTypedArray.js, compareArray.js]
---*/

var obj1 = {
  valueOf: function() {
    return 42;
  }
};

var obj2 = {
  toString: function() {
    return 42;
  }
};

// undefined and NaN covered on typedArrayConversions
var arr = ["1", "", false, true, null, obj1, obj2, [], [1]];

testWithTypedArrayConstructors(function(TA) {
  var sample = new TA(arr.length);
  var expected = new TA([1, 0, 0, 1, 0, 42, 42, 0, 1]);

  sample.set(arr);

  assert(
    compareArray(sample, expected),
    "sample: [" + sample + "], expected: [" + expected + "]"
  );
});
