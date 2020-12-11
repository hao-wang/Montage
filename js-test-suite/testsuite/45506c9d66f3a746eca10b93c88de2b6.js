load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("352fc54052b657308832185e13cd17c9.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.of
description: >
  Return a new TypedArray using -0 and +0 values
includes: [testTypedArray.js]
---*/

testWithTypedArrayConstructors(function(TA) {
  var result = TA.of(-0, +0);
  assert.sameValue(result.length, 2);
  assert.sameValue(result[0], -0, "-0 => 0");
  assert.sameValue(result[1], 0, "+0 => 0");
  assert.sameValue(result.constructor, TA);
  assert.sameValue(Object.getPrototypeOf(result), TA.prototype);
},
[
  Float32Array,
  Float64Array
]);

testWithTypedArrayConstructors(function(TA) {
  var result = TA.of(-0, +0);
  assert.sameValue(result.length, 2);
  assert.sameValue(result[0], 0, "-0 => 0");
  assert.sameValue(result[1], 0, "+0 => 0");
  assert.sameValue(result.constructor, TA);
  assert.sameValue(Object.getPrototypeOf(result), TA.prototype);
},
[
  Int16Array,
  Int32Array,
  Int8Array,
  Uint16Array,
  Uint32Array,
  Uint8Array,
  Uint8ClampedArray
]);
