load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("352fc54052b657308832185e13cd17c9.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.from
description: >
  Throws a TypeError if argument is a Symbol
info: >
  9.4.5.9 IntegerIndexedElementSet ( O, index, value )

  ...
  3. Let numValue be ? ToNumber(value).
  ...
includes: [testTypedArray.js]
features: [Symbol]
---*/

var s = Symbol("1");

testWithTypedArrayConstructors(function(TA) {
  assert.throws(TypeError, function() {
    TA.from([s]);
  });
});
