load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.20-9-c-i-12
description: >
    Array.prototype.filter - element to be retrieved is own accessor
    property that overrides an inherited data property on an Array
---*/

        function callbackfn(val, idx, obj) {
            return val === 111 && idx === 0;
        }

        var arr = [];

            Array.prototype[0] = 10;

            Object.defineProperty(arr, "0", {
                get: function () {
                    return 111;
                },
                configurable: true
            });
            var newArr = arr.filter(callbackfn);

assert.sameValue(newArr.length, 1, 'newArr.length');
assert.sameValue(newArr[0], 111, 'newArr[0]');
