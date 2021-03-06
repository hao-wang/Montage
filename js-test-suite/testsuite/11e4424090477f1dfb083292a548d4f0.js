load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-6-a-89
description: >
    Object.defineProperties will not throw TypeError when
    P.configurable is false, P.[[Set]] and properties.[[Set]] are
    undefined (8.12.9 step 11.a.i)
includes: [propertyHelper.js]
---*/


var obj = {};

function get_Func() {
    return 0;
}

Object.defineProperty(obj, "foo", {
    get: get_Func,
    set: undefined,
    enumerable: false,
    configurable: false
});

Object.defineProperties(obj, {
    foo: {
        set: undefined
    }
});

verifyNotEnumerable(obj, "foo");

verifyNotConfigurable(obj, "foo");

var desc = Object.getOwnPropertyDescriptor(obj, "foo");

if (typeof (desc.set) !== "undefined") {
    $ERROR('Expected typeof (desc.set) === "undefined", actually ' + typeof (desc.set));
}
