load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.16-7-c-i-4
description: >
    Array.prototype.every - element to be retrieved is own data
    property that overrides an inherited data property on an Array
---*/

        var called = 0;
        function callbackfn(val, idx, obj) {
            called++;
            return val === 12;
        }

            Array.prototype[0] = 11;
            Array.prototype[1] = 11;

assert([12, 12].every(callbackfn), '[12, 12].every(callbackfn) !== true');
assert.sameValue(called, 2, 'called');
