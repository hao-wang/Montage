load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 11.4.1-4-a-4-s
description: >
    TypeError isn't thrown when deleting configurable accessor property
---*/

        var obj = {};
        Object.defineProperty(obj, "prop", {
            get: function () {
                return "abc"; 
            },
            configurable: true
        });

        delete obj.prop;

assert.sameValue(obj.hasOwnProperty("prop"), false, 'obj.hasOwnProperty("prop")');
