load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-66
description: >
    Object.defineProperty - desc.value and name.value are two numbers
    with different values (8.12.9 step 6)
includes: [propertyHelper.js]
---*/


var obj = {};

obj.foo = 101; // default value of attributes: writable: true, configurable: true, enumerable: true

Object.defineProperty(obj, "foo", { value: 102 });
verifyEqualTo(obj, "foo", 102);

verifyWritable(obj, "foo");

verifyEnumerable(obj, "foo");

verifyConfigurable(obj, "foo");

