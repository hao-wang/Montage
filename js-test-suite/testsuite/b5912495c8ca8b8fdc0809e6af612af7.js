load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 25.1.2.1
description: Length of IteratorPrototype[ @@iterator ]
info: >
    ES6 Section 17:
    Every built-in Function object, including constructors, has a length
    property whose value is an integer. Unless otherwise specified, this value
    is equal to the largest number of named arguments shown in the subclause
    headings for the function description, including optional parameters.

    [...]

    Unless otherwise specified, the length property of a built-in Function
    object has the attributes { [[Writable]]: false, [[Enumerable]]: false,
    [[Configurable]]: true }.
features: [Symbol.iterator]
includes: [propertyHelper.js]
---*/

var IteratorPrototype = Object.getPrototypeOf(
  Object.getPrototypeOf([][Symbol.iterator]())
);

assert.sameValue(IteratorPrototype[Symbol.iterator].length, 0);

verifyNotEnumerable(IteratorPrototype[Symbol.iterator], 'length');
verifyNotWritable(IteratorPrototype[Symbol.iterator], 'length');
verifyConfigurable(IteratorPrototype[Symbol.iterator], 'length');