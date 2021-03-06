load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.22-3-4
description: >
    Array.prototype.reduceRight - value of 'length' is a number (value
    is +0)
---*/

        var accessed = false;

        function callbackfn(prevVal, curVal, idx, obj) {
            accessed = true;
        }

        var obj = { 0: 9, length: +0 };

assert.sameValue(Array.prototype.reduceRight.call(obj, callbackfn, 1), 1, 'Array.prototype.reduceRight.call(obj, callbackfn, 1)');
assert.sameValue(accessed, false, 'accessed');
