load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("352fc54052b657308832185e13cd17c9.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.prototype.findindex
es6id: 22.2.3.11
description: >
  Predicate is not called on an empty instance
info: >
  22.2.3.11 %TypedArray%.prototype.findIndex ( predicate [ , thisArg ] )

  %TypedArray%.prototype.findIndex is a distinct function that implements the
  same algorithm as Array.prototype.findIndex as defined in 22.1.3.9 except that
  the this object's [[ArrayLength]] internal slot is accessed in place of
  performing a [[Get]] of "length".

  ...

  22.1.3.9 Array.prototype.findIndex ( predicate[ , thisArg ] )

  ...
  6. Repeat, while k < len
    ...
    c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
  ...
  7. Return -1.
includes: [testTypedArray.js]
---*/

testWithTypedArrayConstructors(function(TA) {
  var sample = new TA();
  var called = false;

  var predicate = function() {
    called = true;
    return true;
  };

  var result = sample.findIndex(predicate);

  assert.sameValue(
    called, false,
    "does not call predicate"
  );
  assert.sameValue(
    result, -1,
    "returns -1 on an empty instance"
  );
});
