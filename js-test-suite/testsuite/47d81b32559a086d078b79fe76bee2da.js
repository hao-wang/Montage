load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-289
description: >
    Object.defineProperty - 'O' is an Arguments object, 'name' is own
    property of 'O', and is deleted afterwards, and 'desc' is data
    descriptor, test 'name' is redefined in 'O' with all correct
    attribute values (10.6 [[DefineOwnProperty]] step 3)
includes: [propertyHelper.js]
---*/

(function () { 
    delete arguments[0];
    Object.defineProperty(arguments, "0", {
        value: 10,
        writable: true,
        enumerable: true,
        configurable: true
    });
    verifyEqualTo(arguments, "0", 10);

    verifyWritable(arguments, "0");

    verifyEnumerable(arguments, "0");

    verifyConfigurable(arguments, "0");
}(0, 1, 2));

