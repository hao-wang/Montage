load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2016 Microsoft, Inc. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Brian Terlson <brian.terlson@microsoft.com>
esid: pending
description: >
  %AsyncFunction% is a subclass of Function
---*/
async function foo() { };
var AsyncFunction = foo.constructor;
assert.sameValue(Object.getPrototypeOf(AsyncFunction), Function, "Prototype of constructor is Function");
assert.sameValue(Object.getPrototypeOf(AsyncFunction.prototype), Function.prototype, "Prototype of constructor's prototype is Function.prototype");
assert(foo instanceof Function, 'async function instance is instanceof Function');

