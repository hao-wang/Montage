load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 13.1.1
description: >
    Block : { StatementList }

    It is a Syntax Error if the LexicallyDeclaredNames of StatementList contains any duplicate entries.
negative:
  phase: early
  type: SyntaxError
---*/
{
  class A {}
  class A {}
}