load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.21-9-b-14
description: >
    Array.prototype.reduce - decreasing length of array in step 8
    causes deleted index property not to be visited
---*/

        var accessed = false;
        var testResult = true;

        function callbackfn(accum, val, idx, obj) {
            accessed = true;
            if (idx === 2) {
                testResult = false;
            }
        }

        var arr = [0, 1, 2, 3];

        Object.defineProperty(arr, "0", {
            get: function () {
                arr.length = 2;
                return 0;
            },
            configurable: true
        });

        arr.reduce(callbackfn);

assert(testResult, 'testResult !== true');
assert(accessed, 'accessed !== true');