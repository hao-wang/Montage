load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2011 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    Let O be the result of calling ToObject passing the this value as the
    argument.
es5id: 15.2.4.4_A15
description: Checking Object.prototype.valueOf when called as a global function.
---*/

var v = Object.prototype.valueOf;

assert.throws(TypeError, function() {
    v();
});