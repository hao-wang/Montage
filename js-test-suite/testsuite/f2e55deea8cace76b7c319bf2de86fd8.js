load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-6-a-210
description: >
    Object.defineProperties - 'O' is an Array, 'name' is an array
    index property, both the [[Value]] field of 'desc' and the
    [[Value]] attribute value of 'name' are undefined  (15.4.5.1 step
    4.c)
includes: [propertyHelper.js]
---*/

var arr = [];

Object.defineProperty(arr, "0", {
    value: undefined
});

Object.defineProperties(arr, {
    "0": {
        value: undefined
    }
});
verifyEqualTo(arr, "0", undefined);

verifyNotWritable(arr, "0");

verifyNotEnumerable(arr, "0");

verifyNotConfigurable(arr, "0");
