load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 21.1.3.12
description: >
  String.prototype.normalize.length value and descriptor.
info: >
  21.1.3.12 String.prototype.normalize ( [ form ] )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
---*/

assert.sameValue(
  String.prototype.normalize.length, 0,
  'The value of `String.prototype.normalize.length` is `0`'
);

verifyNotEnumerable(String.prototype.normalize, 'length');
verifyNotWritable(String.prototype.normalize, 'length');
verifyConfigurable(String.prototype.normalize, 'length');
