load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 12.10.1-11-s
description: >
    Strict Mode - SyntaxError is thrown when using WithStatement in
    strict mode code
flags: [onlyStrict]
---*/


assert.throws(SyntaxError, function() {
            eval("with ({}) { throw new Error();}");
});
