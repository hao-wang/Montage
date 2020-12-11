load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-178
description: >
    Object.defineProperty - 'O' is an Array, 'name' is the length
    property of 'O', the [[Value]] field of 'desc' is less than value
    of  the length property, test the configurable large index named
    property of 'O' is deleted (15.4.5.1 step 3.l.ii)
---*/

        var arrObj = [0, 1];

        Object.defineProperty(arrObj, "length", {
            value: 1
        });

assert.sameValue(arrObj.hasOwnProperty("1"), false, 'arrObj.hasOwnProperty("1")');
