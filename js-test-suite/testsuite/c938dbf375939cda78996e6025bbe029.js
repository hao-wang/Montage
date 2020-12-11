load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.19-8-c-i-18
description: >
    Array.prototype.map - element to be retrieved is own accessor
    property without a get function on an Array
---*/

        function callbackfn(val, idx, obj) {
            if (idx === 1) {
                return typeof val === "undefined";
            }
            return false;
        }

        var arr = [];

        Object.defineProperty(arr, "1", {
            set: function () { },
            configurable: true
        });

        var testResult = arr.map(callbackfn);

assert.sameValue(testResult[1], true, 'testResult[1]');
