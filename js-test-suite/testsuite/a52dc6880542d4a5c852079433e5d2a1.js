load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.21-8-b-iii-1-6
description: >
    Array.prototype.reduce - element to be retrieved is own data
    property that overrides an inherited accessor property on an Array
---*/

        var testResult = false;
        function callbackfn(prevVal, curVal, idx, obj) {
            if (idx === 1) {
                testResult = (prevVal === 0);
            }
        }

            Object.defineProperty(Array.prototype, "0", {
                get: function () {
                    return "5";
                },
                configurable: true
            });

            [0, 1, 2].reduce(callbackfn);

assert(testResult, 'testResult !== true');
