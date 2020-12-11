load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.16-2-6
description: >
    Array.prototype.every applied to Array-like object, 'length' is an
    inherited data property
---*/

        function callbackfn1(val, idx, obj) {
            return val > 10;
        }

        function callbackfn2(val, idx, obj) {
            return val > 11;
        }

        var proto = { length: 2 };

        var Con = function () { };
        Con.prototype = proto;

        var child = new Con();
        child[0] = 12;
        child[1] = 11;
        child[2] = 9;

assert(Array.prototype.every.call(child, callbackfn1), 'Array.prototype.every.call(child, callbackfn1) !== true');
assert.sameValue(Array.prototype.every.call(child, callbackfn2), false, 'Array.prototype.every.call(child, callbackfn2)');
