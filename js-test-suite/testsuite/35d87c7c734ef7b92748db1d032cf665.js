load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.16-7-c-ii-4
description: >
    Array.prototype.every - k values are passed in ascending numeric
    order
---*/

        var arr = [0, 1, 2, 3, 4, 5];
        var lastIdx = 0;
        var called = 0;
        function callbackfn(val, idx, o) {
            called++;
            if (lastIdx !== idx) {
                return false;
            } else {
                lastIdx++;
                return true;
            }
        }

assert(arr.every(callbackfn), 'arr.every(callbackfn) !== true');
assert.sameValue(arr.length, called, 'arr.length');
