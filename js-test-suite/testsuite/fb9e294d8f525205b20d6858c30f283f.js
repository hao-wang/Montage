load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-75
description: >
    Object.defineProperty - both desc.[[Get]] and name.[[Get]] are two
    objects which refer to the same object (8.12.9 step 6)
includes: [propertyHelper.js]
---*/


var obj = {};

function getFunc() {
    return 10;
}
function setFunc(value) {
    obj.helpVerifySet = value;
}

Object.defineProperty(obj, "foo", {
    get: getFunc,
    set: setFunc
});

Object.defineProperty(obj, "foo", { get: getFunc });
verifyEqualTo(obj, "foo", getFunc());

verifyWritable(obj, "foo", "helpVerifySet");

verifyNotEnumerable(obj, "foo");

verifyNotConfigurable(obj, "foo");
