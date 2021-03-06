load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-8-b-i-17
description: >
    Array.prototype.lastIndexOf - element to be retrieved is own
    accessor property without a get function on an Array
---*/

        var arr = [];
        Object.defineProperty(arr, "0", {
            set: function () { },
            configurable: true
        });

assert.sameValue(arr.lastIndexOf(undefined), 0, 'arr.lastIndexOf(undefined)');
