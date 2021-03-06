load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2016 Microsoft, Inc. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Brian Terlson <brian.terlson@microsoft.com>
esid: pending
description: >
  Await is allowed as an identifier in generator functions nested in async functions
---*/

var await;
async function foo() {
  function* bar() {
    await = 1;
  }
  bar().next();
}
foo();

assert.sameValue(await, 1);
