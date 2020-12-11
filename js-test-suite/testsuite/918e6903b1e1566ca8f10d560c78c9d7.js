load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) 2017 Michael "Z" Goddard. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-number.prototype.tofixed
es6id: 20.1.3.3
description: >
  Number.prototype.toFixed.length is 1.
info: >
  Number.prototype.toFixed ( fractionDigits )

  17 ECMAScript Standard Built-in Objects:
    Every built-in Function object, including constructors, has a length
    property whose value is an integer. Unless otherwise specified, this
    value is equal to the largest number of named arguments shown in the
    subclause headings for the function description, including optional
    parameters. However, rest parameters shown using the form “...name”
    are not included in the default argument count.

    Unless otherwise specified, the length property of a built-in Function
    object has the attributes { [[Writable]]: false, [[Enumerable]]: false,
    [[Configurable]]: true }.
includes: [propertyHelper.js]
---*/

assert.sameValue(Number.prototype.toFixed.length, 1);

verifyNotEnumerable(Number.prototype.toFixed, "length");
verifyNotWritable(Number.prototype.toFixed, "length");
verifyConfigurable(Number.prototype.toFixed, "length");
