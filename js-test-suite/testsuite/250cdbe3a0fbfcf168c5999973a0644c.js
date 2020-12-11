load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("352fc54052b657308832185e13cd17c9.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-typedarray-buffer-byteoffset-length
description: >
  Returns abrupt from ToLength(length)
info: >
  22.2.4.5 TypedArray ( buffer [ , byteOffset [ , length ] ] )

  This description applies only if the TypedArray function is called with at
  least one argument and the Type of the first argument is Object and that
  object has an [[ArrayBufferData]] internal slot.

  ...
  14. Else,
    a. Let newLength be ? ToLength(length).
  ...
includes: [testTypedArray.js]
---*/

var buffer = new ArrayBuffer(8);
var length = {
  valueOf() {
    throw new Test262Error();
  }
};

testWithTypedArrayConstructors(function(TA) {
  assert.throws(Test262Error, function() {
    new TA(buffer, 0, length);
  });
});
