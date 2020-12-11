load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    Refer 13.1; 
    It is a SyntaxError if any Identifier value occurs more than once within a FormalParameterList of a strict mode
    FunctionDeclaration or FunctionExpression.
es5id: 13.1-30-s
description: >
    Strict Mode - SyntaxError is thrown if a function is created using
    a FunctionExpression whose FunctionBody is contained in strict
    code and the function has two identical parameters
flags: [noStrict]
---*/


assert.throws(SyntaxError, function() {
            eval("var _13_1_30_fun = function (param, param) { 'use strict'; };");
});
