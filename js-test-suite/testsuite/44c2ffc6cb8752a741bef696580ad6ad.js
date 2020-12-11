load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-500
description: >
    ES5 Attributes - success to update [[Enumerable]] attribute of
    accessor property ([[Get]] is  Function, [[Set]] is undefined,
    [[Enumerable]] is true, [[Configurable]] is true) to different
    value
---*/

        var obj = {};

        var getFunc = function () {
            return 1001;
        };

        Object.defineProperty(obj, "prop", {
            get: getFunc,
            set: undefined,
            enumerable: true,
            configurable: true
        });
        var result1 = false;
        var desc1 = Object.getOwnPropertyDescriptor(obj, "prop");
        for (var p1 in obj) {
            if (p1 === "prop") {
                result1 = true;
            }
        }

        Object.defineProperty(obj, "prop", {
            enumerable: false
        });
        var result2 = false;
        var desc2 = Object.getOwnPropertyDescriptor(obj, "prop");
        for (var p2 in obj) {
            if (p2 === "prop") {
                result2 = true;
            }
        }

assert(result1, 'result1 !== true');
assert.sameValue(result2, false, 'result2');
assert.sameValue(desc1.enumerable, true, 'desc1.enumerable');
assert.sameValue(desc2.enumerable, false, 'desc2.enumerable');
