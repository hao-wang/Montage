load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.3.2.1-11-7-s
description: >
    Function constructor call from strict code with formal parameter
    named arguments does not throws SyntaxError if function body is
    not strict mode
flags: [onlyStrict]
---*/

     Function('arguments', 'return;');
