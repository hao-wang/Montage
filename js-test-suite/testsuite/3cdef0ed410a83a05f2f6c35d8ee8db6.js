load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.22-9-b-3
description: >
    Array.prototype.reduceRight - deleted properties in step 2 are
    visible here
---*/

        var accessed = false;
        var testResult = true;

        function callbackfn(preVal, curVal, idx, obj) {
            accessed = true;
            if (idx === 2) {
                testResult = false;
            }
        }

        var obj = { 2: "2", 3: 10 };

        Object.defineProperty(obj, "length", {
            get: function () {
                delete obj[2];
                return 5;
            },
            configurable: true
        });

        Array.prototype.reduceRight.call(obj, callbackfn, "initialValue");

assert(accessed, 'accessed !== true');
assert(testResult, 'testResult !== true');
