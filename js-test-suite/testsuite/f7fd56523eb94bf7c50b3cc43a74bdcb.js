load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 12.14-1
es6id: B.3.5
description: >
    catch doesn't change declaration scope - var initializer in catch
    with same name as catch parameter changes parameter
---*/

  foo = "prior to throw";
  try {
    throw new Error();
  }
  catch (foo) {
    var foo = "initializer in catch";
  }

assert.sameValue(foo, "prior to throw");
