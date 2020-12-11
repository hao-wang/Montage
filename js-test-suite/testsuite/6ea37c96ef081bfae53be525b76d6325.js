load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 23.1.3.11
description: >
  Map.prototype.values.name value and descriptor.
info: >
  Map.prototype.values ()

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
---*/

assert.sameValue(
  Map.prototype.values.name, 'values',
  'The value of `Map.prototype.values.name` is `"values"`'
);

verifyNotEnumerable(Map.prototype.values, 'name');
verifyNotWritable(Map.prototype.values, 'name');
verifyConfigurable(Map.prototype.values, 'name');
