load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("352fc54052b657308832185e13cd17c9.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-typedarray-object
description: >
  Throws a TypeError if NewTarget is undefined.
info: >
  22.2.4.4 TypedArray ( object )

  This description applies only if the TypedArray function is called with at
  least one argument and the Type of the first argument is Object and that
  object does not have either a [[TypedArrayName]] or an [[ArrayBufferData]]
  internal slot.

  ...
  2. If NewTarget is undefined, throw a TypeError exception.
  ...
includes: [testTypedArray.js]
---*/

testWithTypedArrayConstructors(function(TA) {
  assert.throws(TypeError, function() {
    TA({});
  });

  assert.throws(TypeError, function() {
    TA([]);
  });
});