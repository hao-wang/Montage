load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.18-1-4
description: Array.prototype.forEach applied to Boolean object
---*/

        var result = false;
        function callbackfn(val, idx, obj) {
            result = obj instanceof Boolean;
        }

        var obj = new Boolean(true);
        obj.length = 2;
        obj[0] = 11;
        obj[1] = 12;

        Array.prototype.forEach.call(obj, callbackfn);

assert(result, 'result !== true');
