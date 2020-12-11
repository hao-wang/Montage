load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.20-9-b-14
description: >
    Array.prototype.filter - decreasing length of array causes index
    property not to be visited
---*/

        function callbackfn(val, idx, obj) {
            return true;
        }
        var arr = [0, 1, 2, "last"];

        Object.defineProperty(arr, "0", {
            get: function () {
                arr.length = 3;
                return 0;
            },
            configurable: true
        });

        var newArr = arr.filter(callbackfn);


assert.sameValue(newArr.length, 3, 'newArr.length');
assert.sameValue(newArr[2], 2, 'newArr[2]');
