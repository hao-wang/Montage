load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.19-2-19
description: >
    Array.prototype.map - applied to Function object, which implements
    its own property get method
---*/

        function callbackfn(val, idx, obj) {
            return val > 10;
        }

        var fun = function (a, b) {
            return a + b;
        };
        fun[0] = 12;
        fun[1] = 11;
        fun[2] = 9;

        var testResult = Array.prototype.map.call(fun, callbackfn);

assert.sameValue(testResult.length, 2, 'testResult.length');
