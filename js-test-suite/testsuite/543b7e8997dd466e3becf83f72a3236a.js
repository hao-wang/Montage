load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-8-a-5
description: >
    Array.prototype.lastIndexOf -  deleted properties of step 5 are
    visible here on an Array-like object
---*/

        var arr = { 10: false, length: 30 };

        var fromIndex = {
            valueOf: function () {
                delete arr[10];
                return 15;
            }
        };

assert.sameValue(Array.prototype.lastIndexOf.call(arr, false, fromIndex), -1, 'Array.prototype.lastIndexOf.call(arr, false, fromIndex)');
