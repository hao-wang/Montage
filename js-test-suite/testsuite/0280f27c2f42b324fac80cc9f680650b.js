load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.21-8-c-6
description: >
    Array.prototype.reduce - if exception occurs, it occurs after any
    side-effects that might be produced by step 3
---*/

        var obj = {};

        var accessed = false;

        Object.defineProperty(obj, "length", {
            get: function () {
                return {
                    toString: function () {
                        accessed = true;
                        return "2";
                    }
                };
            },
            configurable: true
        });
assert.throws(TypeError, function() {
            Array.prototype.reduce.call(obj, function () { });
});
assert(accessed, 'accessed !== true');
