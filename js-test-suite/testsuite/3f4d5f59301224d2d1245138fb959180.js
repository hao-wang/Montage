load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-2-28
description: >
    Object.defineProperty - argument 'P' is a number that converts to
    a string (value is 1(following 19 zeros).1)
---*/

        var obj = {};
        Object.defineProperty(obj, 10000000000000000000.1, {});

assert(obj.hasOwnProperty("10000000000000000000"), 'obj.hasOwnProperty("10000000000000000000") !== true');