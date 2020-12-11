load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 26.1
description: >
  The value of the [[Prototype]] internal slot of the Reflect object
  is the intrinsic object %ObjectPrototype% (19.1.3).
---*/

assert.sameValue(
  Object.getPrototypeOf(Reflect),
  Object.prototype,
  '`Object.getPrototypeOf(Reflect)` returns `Object.prototype`'
);
