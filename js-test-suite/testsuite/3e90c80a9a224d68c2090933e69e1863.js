load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    When the `yield` keyword occurs within the Initializer of a
    SingleNameBinding within the FormalParameters of a non-generator
    MethodDefinition, it behaves as an Identifier.
es6id: 14.3
flags: [noStrict]
---*/

var yield = 'default';
var obj = {
  method(x = yield) {
    return x;
  }
};


assert.sameValue(obj.method(), 'default');
