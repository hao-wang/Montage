load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-586
description: >
    ES5 Attributes - Fail to update value of property into of
    [[Proptotype]] internal property  (JSON)
includes: [propertyHelper.js]
---*/

var data = "data";

    Object.defineProperty(Object.prototype, "prop", {
        get: function () {
            return data;
        },
        enumerable: false,
        configurable: true
    });
    verifyNotWritable(JSON, "prop", "nocheck");

    assert(!JSON.hasOwnProperty("prop"));
    assert.sameValue(JSON.prop, "data");
    assert.sameValue(data, "data");
