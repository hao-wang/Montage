load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-5-b-12
description: >
    Object.defineProperties - 'enumerable' property of 'descObj' is
    own accessor property (8.10.5 step 3.a)
---*/

        var obj = {};
        var accessed = false;
        var descObj = {};

        Object.defineProperty(descObj, "enumerable", {
            get: function () {
                return true;
            }
        });

        Object.defineProperties(obj, {
            prop: descObj
        });
        for (var property in obj) {
            if (property === "prop") {
                accessed = true;
            }
        }

assert(accessed, 'accessed !== true');
