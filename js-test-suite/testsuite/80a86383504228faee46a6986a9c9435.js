load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.19-2-6
description: >
    Array.prototype.map - applied to Array-like object, 'length' is an
    inherited data property
---*/

        function callbackfn(val, idx, obj) {
            return val > 10;
        }

        var proto = { length: 2 };

        var Con = function () { };
        Con.prototype = proto;

        var child = new Con();
        child[0] = 12;
        child[1] = 11;
        child[2] = 9;

        var testResult = Array.prototype.map.call(child, callbackfn);

assert.sameValue(testResult.length, 2, 'testResult.length');
