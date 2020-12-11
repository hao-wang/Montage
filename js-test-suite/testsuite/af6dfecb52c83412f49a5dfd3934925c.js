load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-arrow-function-definitions
es6id: 14.2
description: >
  The `yield` token is interpreted contextually outside of strict mode
info: |
  ArrowFunction[In, Yield] :

    ArrowParameters[?Yield] [no LineTerminator here] => ConciseBody[?In]

  14.2.1 Static Semantics: Early Errors#

  ArrowFunction : ArrowParameters=>ConciseBody

  - It is a Syntax Error if ArrowParameters Contains YieldExpression is true. 
features: [generators, default-parameters]
negative:
  phase: early
  type: SyntaxError
---*/

function *g() {
  (x = yield) => {};
}