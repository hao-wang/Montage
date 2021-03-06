load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.14-3-16
description: >
    Array.prototype.indexOf - 'length' is a string containing a hex
    number
---*/

        var obj = { 10: true, 11: "0x00B", length: "0x00B" };

assert.sameValue(Array.prototype.indexOf.call(obj, true), 10, 'Array.prototype.indexOf.call(obj, true)');
assert.sameValue(Array.prototype.indexOf.call(obj, "0x00B"), -1, 'Array.prototype.indexOf.call(obj, "0x00B")');
