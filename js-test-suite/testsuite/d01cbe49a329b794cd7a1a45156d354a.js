load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.21-8-b-iii-1-13
description: >
    Array.prototype.reduce - element to be retrieved is own accessor
    property that overrides an inherited accessor property on an
    Array-like object
---*/

        var testResult = false;

        function callbackfn(prevVal, curVal, idx, obj) {
            if (idx === 1) {
                testResult = (prevVal === "9");
            }
        }

        var proto = { 1: 1, 2: 2};

        Object.defineProperty(proto, "0", {
            get: function () {
                return 0;
            },
            configurable: true
        });

        var Con = function () { };
        Con.prototype = proto;

        var child = new Con();
        child.length = 3;

        Object.defineProperty(child, "0", {
            get: function () {
                return "9";
            },
            configurable: true
        });

        Array.prototype.reduce.call(child, callbackfn);

assert(testResult, 'testResult !== true');
