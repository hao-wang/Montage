load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.22-9-b-12
description: >
    Array.prototype.reduceRight - deleting own property with prototype
    property in step 8 causes prototype index property to be visited
    on an Array-like object
---*/

        var testResult = false;

        function callbackfn(prevVal, curVal, idx, obj) {
            if (idx === 1 && curVal === 1) {
                testResult = true;
            }
        }

        var obj = { 0: 0, 1: 111, length: 10 };

        Object.defineProperty(obj, "4", {
            get: function () {
                delete obj[1];
                return 0;
            },
            configurable: true
        });

            Object.prototype[1] = 1;
            Array.prototype.reduceRight.call(obj, callbackfn);

assert(testResult, 'testResult !== true');
