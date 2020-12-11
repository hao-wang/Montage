load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.16-1-5
description: Array.prototype.every applied to number primitive
---*/

        var accessed = false;
        function callbackfn(val, idx, obj) {
            accessed = true;
            return obj instanceof Number;
        }

            Number.prototype[0] = 1;
            Number.prototype.length = 1;

assert(Array.prototype.every.call(2.5, callbackfn), 'Array.prototype.every.call(2.5, callbackfn) !== true');
assert(accessed, 'accessed !== true');
