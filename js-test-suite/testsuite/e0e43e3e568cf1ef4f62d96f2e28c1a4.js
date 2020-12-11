load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.5-4-17
description: >
    Object.create - own data property in 'Properties' which is not
    enumerable is not defined in 'obj' (15.2.3.7 step 3)
---*/

        var props = {};
        Object.defineProperty(props, "prop", {
            value: {},
            enumerable: false
        });
        var newObj = Object.create({}, props);

assert.sameValue(newObj.hasOwnProperty("prop"), false, 'newObj.hasOwnProperty("prop")');
