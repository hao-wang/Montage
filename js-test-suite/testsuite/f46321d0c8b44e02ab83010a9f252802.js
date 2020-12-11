load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.18-7-7
description: >
    Array.prototype.forEach - considers new value of elements in array
    after the call
---*/

        var result = false;
        var arr = [1, 2, 3, 4, 5];

        function callbackfn(val, Idx, obj) {
            arr[4] = 6;
            if (val >= 6) {
                result = true;
            }
        }

        arr.forEach(callbackfn);

assert(result, 'result !== true');
