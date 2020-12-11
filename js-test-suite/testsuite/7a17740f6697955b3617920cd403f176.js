load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.18-7-c-i-19
description: >
    Array.prototype.forEach - element to be retrieved is own accessor
    property without a get function that overrides an inherited
    accessor property on an Array-like object
---*/

        var testResult = false;

        function callbackfn(val, idx, obj) {
            if (idx === 1) {
                testResult = (typeof val === "undefined");
            }
        }

        var obj = { length: 2 };

        Object.defineProperty(obj, "1", {
            set: function () { },
            configurable: true
        });

            Object.defineProperty(Object.prototype, "1", {
                get: function () {
                    return 10;
                },
                configurable: true
            });

            Array.prototype.forEach.call(obj, callbackfn);

assert(testResult, 'testResult !== true');
