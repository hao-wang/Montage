load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Expression not allowed in head's AssignmentExpression position
info: >
    IterationStatement :
        for ( ForDeclaration of AssignmentExpression ) Statement
es6id: 13.7
negative:
  phase: early
  type: SyntaxError
---*/

for (let x of [], []) {}