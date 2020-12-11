load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.22-2-17
description: >
    Array.prototype.reduceRight applied to the Arguments object, which
    implements its own property get method
---*/

        var arg;
        var accessed = false;

        function callbackfn(prevVal, curVal, idx, obj) {
            accessed = true;
            return obj.length === 2;
        }

        var func = function (a, b) {
            arg = arguments;
            return Array.prototype.reduceRight.call(arguments, callbackfn, 11);
        };

assert(func(12, 11), 'func(12, 11) !== true');
assert(accessed, 'accessed !== true');
