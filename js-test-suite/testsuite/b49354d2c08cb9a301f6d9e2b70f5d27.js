load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 21.1.3.6
description: >
  String.prototype.endsWith.length value and descriptor.
info: >
  21.1.3.6 String.prototype.endsWith ( searchString [ , endPosition] )

  The length property of the endsWith method is 1.

includes: [propertyHelper.js]
---*/

assert.sameValue(
  String.prototype.endsWith.length, 1,
  'The value of `String.prototype.endsWith.length` is `1`'
);

verifyNotEnumerable(String.prototype.endsWith, 'length');
verifyNotWritable(String.prototype.endsWith, 'length');
verifyConfigurable(String.prototype.endsWith, 'length');
