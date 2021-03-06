load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.18-7-c-i-20
description: >
    Array.prototype.forEach - element to be retrieved is own accessor
    property without a get function that overrides an inherited
    accessor property on an Array
---*/

        var testResult = false;

        function callbackfn(val, idx, obj) {
            if (idx === 0) {
                testResult = (typeof val === "undefined");
            }
        }

        var arr = [];

        Object.defineProperty(arr, "0", {
            set: function () { },
            configurable: true
        });

            Object.defineProperty(Array.prototype, "0", {
                get: function () {
                    return 100;
                },
                configurable: true
            });

            arr.forEach(callbackfn);

assert(testResult, 'testResult !== true');
