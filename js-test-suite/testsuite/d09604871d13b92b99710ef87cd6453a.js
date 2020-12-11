load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 11.13.2-6-1gs
description: >
    Strict Mode - SyntaxError is throw if the identifier eval appears
    as the LeftHandSideExpression of a Compound Assignment operator(*=)
negative:
  phase: early
  type: SyntaxError
flags: [onlyStrict]
---*/

eval *= 20;