load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 7.8.3-3-s
description: Strict Mode - octal extension (01) is forbidden in strict mode
flags: [onlyStrict]
---*/

var err = null;

try {
  eval("var _7_8_3_3 = 01;");
} catch (e) {
  err = e;
}

assert(err instanceof SyntaxError);
assert.sameValue(typeof _7_8_3_3, "undefined");
