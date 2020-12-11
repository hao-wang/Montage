load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.14-9-b-i-2
description: >
    Array.prototype.indexOf - element to be retrieved is own data
    property on an Array
---*/

assert.sameValue([true, true, true].indexOf(true), 0, '[true, true, true].indexOf(true)');
assert.sameValue([false, true, true].indexOf(true), 1, '[false, true, true].indexOf(true)');
assert.sameValue([false, false, true].indexOf(true), 2, '[false, false, true].indexOf(true)');
