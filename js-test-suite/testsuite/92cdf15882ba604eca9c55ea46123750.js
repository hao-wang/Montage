load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 7.6-7
description: >
    7.6 - SyntaxError expected: reserved words used as Identifier
    Names in UTF8: typeof (typeof)
negative:
  phase: early
  type: SyntaxError
---*/

var typeo\u0066 = 123;
