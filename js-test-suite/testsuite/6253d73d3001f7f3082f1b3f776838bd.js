load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-functiondeclarationinstantiation
es6id: 9.2.12
description: >
  Arguments object is created even when the body contains a function named
  "arguments"
info: |
  [...]
  19. Else if "arguments" is an element of parameterNames, then
      a. Let argumentsObjectNeeded be false.
  20. Else if hasParameterExpressions is false, then
      a. If "arguments" is an element of functionNames or if "arguments" is an
         element of lexicalNames, then
         i. Let argumentsObjectNeeded be false.
  [...]
flags: [noStrict]
---*/

var args;

var g  = function* (x = args = arguments) {
  let arguments;
};

g().next();

assert.sameValue(typeof args, 'object');
assert.sameValue(args.length, 0);
