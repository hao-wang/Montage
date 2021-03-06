load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.17-3-25
description: Array.prototype.some - value of 'length' is a negative non-integer
---*/

        function callbackfn1(val, idx, obj) {
            return val > 10;
        }

        function callbackfn2(val, idx, obj) {
            return val > 11;
        }

        var obj = {
            0: 9,
            1: 11,
            2: 12,
            length: -4294967294.5
        };

assert.sameValue(Array.prototype.some.call(obj, callbackfn1), false, 'Array.prototype.some.call(obj, callbackfn1)');
assert.sameValue(Array.prototype.some.call(obj, callbackfn2), false, 'Array.prototype.some.call(obj, callbackfn2)');
