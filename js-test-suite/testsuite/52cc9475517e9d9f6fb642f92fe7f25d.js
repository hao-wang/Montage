load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 7.8.4-1-s
description: >
    A directive preceeding an 'use strict' directive may not contain
    an OctalEscapeSequence
---*/


assert.throws(SyntaxError, function() {
    eval(' "asterisk: \\052" /* octal escape sequences forbidden in strict mode*/ ; "use strict";');
});
