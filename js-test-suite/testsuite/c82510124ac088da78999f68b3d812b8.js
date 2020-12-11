load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 14.2.1
description: >
    ArrowParameters[Yield] :
      BindingIdentifier[?Yield]
      ...
    
    Parameter named "eval", non-strict

flags: [noStrict]
---*/
var af = eval => eval;


assert.sameValue(typeof af, "function");
assert.sameValue(af(1), 1);
