load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.9.5.43-0-3
description: Date.prototype.toISOString must exist as a function
---*/

assert.sameValue(typeof (Date.prototype.toISOString), "function", 'typeof (Date.prototype.toISOString)');
