load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.14-3-10
description: >
    Array.prototype.indexOf - value of 'length' is number primitive
    (value is NaN)
---*/

        var obj = { 0: 0, length: NaN };

assert.sameValue(Array.prototype.indexOf.call(obj, 0), -1, 'Array.prototype.indexOf.call(obj, 0)');
