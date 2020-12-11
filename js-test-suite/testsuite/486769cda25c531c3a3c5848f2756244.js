load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-prepareforordinarycall
description: >
    Creation of new variable environment for the function parameters and body
    (as disinct from that for the function's BindingIdentifier)
info: |
    [...]
    3. Let callerContext be the running execution context.
    4. Let calleeContext be PrepareForOrdinaryCall(F, undefined).
    [...]

    9.2.1.1 PrepareForOrdinaryCall

    [...]
    8. Let localEnv be NewFunctionEnvironment(F, newTarget).
    9. Set the LexicalEnvironment of calleeContext to localEnv.
    10. Set the VariableEnvironment of calleeContext to localEnv.
    [...]
---*/

var name = 'outside';
var probeBefore = function() { return name; };
var probeBody;

// This test intentionally elides parameter expressions because their presence
// triggers the creation of an additional LexicalEnvironment dedicated to the
// function body (see sec-functiondeclarationinstantiation)
var func = function name() {
  // The initializer is intentionally omitted from the following
  // VariableStatement in order to demonstrate that a new binding is created
  // (and not simply re-used from the FunctionExpression's BindingIdentifier).
  var name;
  probeBody = function() { return name; };
};

func();

assert.sameValue(probeBefore(), 'outside');
assert.sameValue(probeBody(), undefined);
