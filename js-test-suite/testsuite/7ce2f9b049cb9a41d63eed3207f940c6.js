load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.20-9-c-i-9
description: >
    Array.prototype.filter - element to be retrieved is own accessor
    property on an Array-like object
---*/

        function callbackfn(val, idx, obj) {
            return (idx === 0) && (val === 11);
        }

        var obj = { 10: 10, length: 20 };

        Object.defineProperty(obj, "0", {
            get: function () {
                return 11;
            },
            configurable: true
        });

        var newArr = Array.prototype.filter.call(obj, callbackfn);

assert.sameValue(newArr.length, 1, 'newArr.length');
assert.sameValue(newArr[0], 11, 'newArr[0]');
