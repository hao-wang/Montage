load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("352fc54052b657308832185e13cd17c9.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.prototype.set-array-offset
description: >
  Return abrupt from ToLength(src "length")
info: >
  22.2.3.23.1 %TypedArray%.prototype.set (array [ , offset ] )

  1. Assert: array is any ECMAScript language value other than an Object with a
  [[TypedArrayName]] internal slot. If it is such an Object, the definition in
  22.2.3.23.2 applies.
  ...
  16. Let srcLength be ? ToLength(? Get(src, "length")).
  ...
includes: [testTypedArray.js]
---*/

var obj1 = {
  length: {
    valueOf: function() {
      throw new Test262Error();
    }
  }
};

var obj2 = {
  length: {
    toString: function() {
      throw new Test262Error();
    }
  }
};

testWithTypedArrayConstructors(function(TA) {
  var sample = new TA([1, 2, 3]);

  assert.throws(Test262Error, function() {
    sample.set(obj1);
  }, "valueOf");

  assert.throws(Test262Error, function() {
    sample.set(obj2);
  }, "toString");
});
