load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 13.1-38-s
description: >
    StrictMode - SyntaxError is thrown if 'eval' occurs as the
    Identifier of a FunctionExpression whose FunctionBody is contained
    in strict code
flags: [noStrict]
---*/

        var _13_1_38_s = {};
assert.throws(SyntaxError, function() {
            eval("_13_1_38_s.x = function eval() {'use strict'; };");
});
