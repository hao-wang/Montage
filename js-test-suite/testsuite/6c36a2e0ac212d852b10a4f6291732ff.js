load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-5-33
description: >
    Array.prototype.lastIndexOf - match on the first element, a middle
    element and the last element when 'fromIndex' is passed
---*/

assert.sameValue([0, 1, 2, 3, 4].lastIndexOf(0, 0), 0, '[0, 1, 2, 3, 4].lastIndexOf(0, 0)');
assert.sameValue([0, 1, 2, 3, 4].lastIndexOf(0, 2), 0, '[0, 1, 2, 3, 4].lastIndexOf(0, 2)');
assert.sameValue([0, 1, 2, 3, 4].lastIndexOf(2, 2), 2, '[0, 1, 2, 3, 4].lastIndexOf(2, 2)');
assert.sameValue([0, 1, 2, 3, 4].lastIndexOf(2, 4), 2, '[0, 1, 2, 3, 4].lastIndexOf(2, 4)');
assert.sameValue([0, 1, 2, 3, 4].lastIndexOf(4, 4), 4, '[0, 1, 2, 3, 4].lastIndexOf(4, 4)');
