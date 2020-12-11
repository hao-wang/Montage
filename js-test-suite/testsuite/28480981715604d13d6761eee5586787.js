load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 21.2.5.11
description: Behavior when error thrown while accessing `flags` property
info: >
    [...]
    7. Let flags be ToString(Get(rx, "flags")).
    8. ReturnIfAbrupt(flags).
features: [Symbol.split]
---*/

var poisonedFlags = {
  get flags() {
    throw new Test262Error();
  }
};

assert.throws(Test262Error, function() {
  RegExp.prototype[Symbol.split].call(poisonedFlags);
});