load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-3-42-1
description: >
    Object.defineProperty - 'Attributes' is an Error object that uses
    Object's [[Get]] method to access the 'enumerable' property of
    prototype object (8.10.5 step 3.a)
---*/

        var obj = {};
        var accessed = false;

            Error.prototype.enumerable = true;
            var errObj = new Error();

            Object.defineProperty(obj, "property", errObj);

            for (var prop in obj) {
                if (prop === "property") {
                    accessed = true;
                }
            }

assert(accessed, 'accessed !== true');
