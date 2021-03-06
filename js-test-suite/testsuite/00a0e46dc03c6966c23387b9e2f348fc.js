load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 24.1.4.1
esid: sec-get-arraybuffer.prototype.bytelength
description: Requires this value to have a [[ArrayBufferData]] internal slot
info: >
  24.1.4.1 get ArrayBuffer.prototype.byteLength

  1. Let O be the this value.
  2. If Type(O) is not Object, throw a TypeError exception.
  3. If O does not have an [[ArrayBufferData]] internal slot, throw a TypeError
  exception.
  ...
---*/

assert.throws(TypeError, function() {
  ArrayBuffer.prototype.byteLength;
});
