load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("352fc54052b657308832185e13cd17c9.js");
load("54b448c9197917c78ad3479808ea1a56.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-integer-indexed-exotic-objects-get-p-receiver
description: >
  Throws a TypeError if key has a numeric index and object has a detached
  buffer (honoring the Realm of the current execution context)
info: >
  9.4.5.4 [[Get]] (P, Receiver)

  ...
  2. If Type(P) is String, then
    a. Let numericIndex be ! CanonicalNumericIndexString(P).
    b. If numericIndex is not undefined, then
      i. Return ? IntegerIndexedElementGet(O, numericIndex).
  ...
includes: [testTypedArray.js, detachArrayBuffer.js]
---*/

var other = $.createRealm().global;

testWithTypedArrayConstructors(function(TA) {
  var OtherTA = other[TA.name];
  var sample = new OtherTA(1);

  $DETACHBUFFER(sample.buffer);

  assert.throws(TypeError, function() {
    sample[0];
  });
});