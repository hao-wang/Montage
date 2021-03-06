load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 13.0-3
description: >
    13.0 - property names in function definition is not allowed, add a
    new property into object
---*/

        var obj = {};
assert.throws(SyntaxError, function() {
            eval("function obj.tt() {};");
});
