load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("352fc54052b657308832185e13cd17c9.js");
load("54b448c9197917c78ad3479808ea1a56.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-integer-indexed-exotic-objects-defineownproperty-p-desc
description: |
  Throws a TypeError if object has valid numeric index and a detached buffer
  (honoring the Realm of the current execution context)
info: >
  9.4.5.3 [[DefineOwnProperty]] ( P, Desc)
  ...
  3. If Type(P) is String, then
    a. Let numericIndex be ! CanonicalNumericIndexString(P).
    b. If numericIndex is not undefined, then
      ...
      xi. If Desc has a [[Value]] field, then
        1. Let value be Desc.[[Value]].
        2. Return ? IntegerIndexedElementSet(O, intIndex, value).
  ...

  9.4.5.9 IntegerIndexedElementSet ( O, index, value )

  ...
  4. Let buffer be the value of O's [[ViewedArrayBuffer]] internal slot.
  5. If IsDetachedBuffer(buffer) is true, throw a TypeError exception.
  ...
includes: [testTypedArray.js, detachArrayBuffer.js]
features: [Reflect]
---*/

var other = $.createRealm().global;
var desc = {
  value: 0,
  configurable: false,
  enumerable: true,
  writable: true
};

testWithTypedArrayConstructors(function(TA) {
  var OtherTA = other[TA.name];
  var sample = new OtherTA(1);

  $DETACHBUFFER(sample.buffer);

  assert.throws(TypeError, function() {
    Reflect.defineProperty(sample, '0', desc);
  });
});
