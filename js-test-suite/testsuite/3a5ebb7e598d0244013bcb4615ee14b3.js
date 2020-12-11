load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.5.4.20-2-29
description: >
    String.prototype.trim - argument 'this' is a string(value is 'AB
    \cd')
---*/

assert.sameValue(String.prototype.trim.call("AB\n\\cd"), "AB\n\\cd", 'String.prototype.trim.call("AB\n\\cd")');