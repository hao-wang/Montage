load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.20-9-c-i-22
description: >
    Array.prototype.filter - element to be retrieved is inherited
    accessor property without a get function on an Array
---*/

        function callbackfn(val, idx, obj) {
            return undefined === val && idx === 0;
        }

            Object.defineProperty(Array.prototype, "0", {
                set: function () { },
                configurable: true
            });
            var newArr = [, ].filter(callbackfn);

assert.sameValue(newArr.length, 1, 'newArr.length');
assert.sameValue(newArr[0], undefined, 'newArr[0]');
