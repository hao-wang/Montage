load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.21-9-c-ii-11
description: >
    Array.prototype.reduce - callbackfn is called with 2 formal
    parameter
---*/

        var result = false;
        function callbackfn(prevVal, curVal) {
            result = (curVal > 10 && 1 === prevVal);
        }

        [11].reduce(callbackfn, 1);

assert(result, 'result !== true');
