load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.22-1-4
description: Array.prototype.reduceRight applied to Boolean object
---*/

        var obj = new Boolean(true);
        obj.length = 2;
        obj[0] = 11;
        obj[1] = 12;
        var accessed = false;

        function callbackfn(prevVal, curVal, idx, obj) {
            accessed = true;
            return obj instanceof Boolean;
        }

assert(Array.prototype.reduceRight.call(obj, callbackfn, 11), 'Array.prototype.reduceRight.call(obj, callbackfn, 11) !== true');
assert(accessed, 'accessed !== true');
