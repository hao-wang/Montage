load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.18-2-1
description: >
    Array.prototype.forEach - 'length' is own data property on an
    Array-like object
---*/

        var result = false;
        function callbackfn(val, idx, obj) {
            result = (obj.length === 2);
        }

        var obj = {
            0: 12,
            1: 11,
            2: 9,
            length: 2
        };

        Array.prototype.forEach.call(obj, callbackfn);

assert(result, 'result !== true');
