load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.21-9-c-ii-7
description: >
    Array.prototype.reduce - unhandled exceptions happened in
    callbackfn terminate iteration
---*/

        var accessed = false;

        function callbackfn(prevVal, curVal, idx, obj) {
            if (idx > 0) {
                accessed = true;
            }
            if (idx === 0) {
                throw new Error("Exception occurred in callbackfn");
            }
        }

        var obj = { 0: 11, 4: 10, 10: 8, length: 20 };
assert.throws(Error, function() {
            Array.prototype.reduce.call(obj, callbackfn, 1);
});
assert.sameValue(accessed, false, 'accessed');
