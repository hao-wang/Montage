load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.16-2-4
description: >
    Array.prototype.every - 'length' is own data property that
    overrides an inherited data property on an Array
---*/

        var arrProtoLen = 0;
        function callbackfn1(val, idx, obj) {
            return val > 10;
        }

        function callbackfn2(val, idx, obj) {
            return val > 11;
        }

            arrProtoLen = Array.prototype.length;
            Array.prototype.length = 0;
            Array.prototype[2] = 9;

assert([12, 11].every(callbackfn1), '[12, 11].every(callbackfn1) !== true');
assert.sameValue([12, 11].every(callbackfn2), false, '[12, 11].every(callbackfn2)');
