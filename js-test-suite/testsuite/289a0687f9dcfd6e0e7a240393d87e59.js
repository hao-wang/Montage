load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.17-7-b-3
description: >
    Array.prototype.some - deleted properties in step 2 are visible
    here
---*/

        var accessed = false;
        function callbackfn(val, idx, obj) {
            accessed = true;
            return idx === 2;
        }
        var arr = { 2: 6.99, 8: 19};

        Object.defineProperty(arr, "length", {
            get: function () {
                delete arr[2];
                return 10;
            },
            configurable: true
        });

assert.sameValue(Array.prototype.some.call(arr, callbackfn), false, 'Array.prototype.some.call(arr, callbackfn)');
assert(accessed, 'accessed !== true');
