load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("352fc54052b657308832185e13cd17c9.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-integer-indexed-exotic-objects-defineownproperty-p-desc
description: |
  Returns true after setting a valid numeric index key
info: >
  9.4.5.3 [[DefineOwnProperty]] ( P, Desc)
  ...
  3. If Type(P) is String, then
    a. Let numericIndex be ! CanonicalNumericIndexString(P).
    b. If numericIndex is not undefined, then
      ...
      x. If Desc has a [[Writable]] field and if Desc.[[Writable]] is false,
      return false.
  ...
includes: [testTypedArray.js, propertyHelper.js]
features: [Reflect]
---*/

testWithTypedArrayConstructors(function(TA) {
  var sample = new TA([42, 42]);

  assert.sameValue(
    Reflect.defineProperty(sample, "0", {
      value: 8,
      configurable: false,
      enumerable: true,
      writable: true
    }),
    true
  );

  assert.sameValue(sample[0], 8, "property value was set");
  var desc = Object.getOwnPropertyDescriptor(sample, "0");

  assert.sameValue(desc.value, 8, "desc.value");
  assert.sameValue(desc.writable, true, "property is writable");

  verifyEnumerable(sample, "0");
  verifyNotConfigurable(sample, "0");
});
