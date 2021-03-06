load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.17-2-19
description: >
    Array.prototype.some applied to Function object which implements
    its own property get method
---*/

        function callbackfn1(val, idx, obj) {
            return val > 10;
        }

        function callbackfn2(val, idx, obj) {
            return val > 11;
        }

        var fun = function (a, b) {
            return a + b;
        };
        fun[0] = 9;
        fun[1] = 11;
        fun[2] = 12;

assert(Array.prototype.some.call(fun, callbackfn1), 'Array.prototype.some.call(fun, callbackfn1) !== true');
assert.sameValue(Array.prototype.some.call(fun, callbackfn2), false, 'Array.prototype.some.call(fun, callbackfn2)');
