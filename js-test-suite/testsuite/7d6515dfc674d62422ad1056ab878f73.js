load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-dataview.prototype.getint8
es6id: 24.2.4.7
description: >
  Return values from Buffer using a custom offset
info: |
  24.2.4.7 DataView.prototype.getInt8 ( byteOffset )

  1. Let v be the this value.
  2. Return ? GetViewValue(v, byteOffset, true, "Int8").

  24.2.1.1 GetViewValue ( view, requestIndex, isLittleEndian, type )

  ...
  14. Let bufferIndex be getIndex + viewOffset.
  15. Return GetValueFromBuffer(buffer, bufferIndex, type, isLittleEndian).
  ...

  24.1.1.5 GetValueFromBuffer ( arrayBuffer, byteIndex, type [ , isLittleEndian
  ] )

  ...
  8. If isLittleEndian is false, reverse the order of the elements of rawValue.
  ...
features: [DataView.prototype.setUint8]
---*/

var buffer = new ArrayBuffer(8);
var sample = new DataView(buffer, 0);

sample.setUint8(0, 7);
sample.setUint8(1, 7);
sample.setUint8(2, 7);
sample.setUint8(3, 7);
sample.setUint8(4, 1);
sample.setUint8(5, 127);
sample.setUint8(6, 128);
sample.setUint8(7, 255);

sample = new DataView(buffer, 4);

assert.sameValue(sample.getInt8(0), 1);
assert.sameValue(sample.getInt8(1), 127);
assert.sameValue(sample.getInt8(2), -128);
assert.sameValue(sample.getInt8(3), -1);
