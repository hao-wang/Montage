load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// copyright 2016 microsoft, inc. all rights reserved.
// this code is governed by the bsd license found in the license file.

/*---
author: brian terlson <brian.terlson@microsoft.com>
esid: pending
description: >
  async function bodies are executed immediately (unlike generators)
---*/

let called;
async function foo() {
  called = true;
  await new Promise();
}

foo();
assert(called);
