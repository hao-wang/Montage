load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-1-14
description: Array.prototype.lastIndexOf applied to Error object
---*/

        var obj = new SyntaxError();
        obj.length = 2;
        obj[1] = Infinity;

assert.sameValue(Array.prototype.lastIndexOf.call(obj, Infinity), 1, 'Array.prototype.lastIndexOf.call(obj, Infinity)');
