load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) 2016 The V8 Project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 20.1.2.13
esid: sec-number.parseint
description: >
  "parseInt" property descriptor and value of Number
info: |
  Number.parseInt

  The value of the Number.parseInt data property is the same built-in function
  object that is the value of the parseInt property of the global object
  defined in 18.2.4.

  17 ECMAScript Standard Built-in Objects:

  Every other data property described in clauses 18 through 26 and in Annex B.2
  has the attributes { [[Writable]]: true, [[Enumerable]]: false,
  [[Configurable]]: true } unless otherwise specified.
includes: [propertyHelper.js]
---*/

assert.sameValue(Number.parseInt, parseInt);

verifyNotEnumerable(Number, "parseInt");
verifyWritable(Number, "parseInt");
verifyConfigurable(Number, "parseInt");
