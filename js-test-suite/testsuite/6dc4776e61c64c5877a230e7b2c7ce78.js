load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-functiondeclarationinstantiation
description: >
    Creation of new variable environment for the function body (as disinct from
    that for the function's parameters)
info: |
    [...]
    26. If hasParameterExpressions is false, then
        [...]
    27. Else,
        a. NOTE A separate Environment Record is needed to ensure that closures
           created by expressions in the formal parameter list do not have
           visibility of declarations in the function body.
        b. Let varEnv be NewDeclarativeEnvironment(env).
        c. Let varEnvRec be varEnv's EnvironmentRecord.
        d. Set the VariableEnvironment of calleeContext to varEnv.
        e. Let instantiatedVarNames be a new empty List.
        [...]
---*/

var x = 'outside';
var probeParams, probeBody;

function* g(_ = probeParams = function() { return x; }) {
  var x = 'inside';
  probeBody = function() { return x; };
}
g().next();

assert.sameValue(probeParams(), 'outside');
assert.sameValue(probeBody(), 'inside');
