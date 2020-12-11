load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.22-9-c-ii-26
description: >
    Array.prototype.reduceRight - Array Object can be used as
    accumulator
---*/

        var accessed = false;
        var objArray = [];
        function callbackfn(prevVal, curVal, idx, obj) {
            accessed = true;
            return prevVal === objArray;
        }

        var obj = { 0: 11, length: 1 };

assert.sameValue(Array.prototype.reduceRight.call(obj, callbackfn, objArray), true, 'Array.prototype.reduceRight.call(obj, callbackfn, objArray)');
assert(accessed, 'accessed !== true');
