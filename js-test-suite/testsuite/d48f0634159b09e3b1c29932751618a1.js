load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-bound-function-exotic-objects-construct-argumentslist-newtarget
es6id: 9.4.1.2
description: >
  The NewTarget value is changed to the target function when the bound function
  object is constructed using the `new` operator
info: |
  [...]
  5. If SameValue(F, newTarget) is true, let newTarget be target.
  6. Return ? Construct(target, args, newTarget). 
features: [new.target]
---*/

var newTarget;
function A() {
  newTarget = new.target;
}
var B = A.bind();
var C = B.bind();

var c = new C();

assert.sameValue(newTarget, A);
assert.sameValue(Object.getPrototypeOf(c), A.prototype);
