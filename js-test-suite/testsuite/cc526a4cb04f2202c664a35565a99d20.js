load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-2-5
description: >
    Array.prototype.lastIndexOf - 'length' is own data property that
    overrides an inherited accessor property on an Array-like object
---*/

        var proto = {};
        Object.defineProperty(proto, "length", {
            get: function () {
                return 0;
            },
            configurable: true
        });

        var Con = function () {};
        Con.prototype = proto;

        var child = new Con();

        Object.defineProperty(child, "length", {
            value: 2,
            configurable: true
        });
        child[1] = null;

assert.sameValue(Array.prototype.lastIndexOf.call(child, null), 1, 'Array.prototype.lastIndexOf.call(child, null)');
