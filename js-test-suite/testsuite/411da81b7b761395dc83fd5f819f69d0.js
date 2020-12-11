load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 26.1.14
description: >
  Return false if target and proto are the same, without setting a new prototype.
info: >
  26.1.14 Reflect.setPrototypeOf ( target, proto )

  ...
  3. Return target.[[SetPrototypeOf]](proto).

  9.1.2 [[SetPrototypeOf]] (V)

  ...
  8. Repeat while done is false,
    a. If p is null, let done be true.
    b. Else, if SameValue(p, O) is true, return false.
  ...
---*/

var o1 = {};
assert.sameValue(Reflect.setPrototypeOf(o1, o1), false);
assert.sameValue(Object.getPrototypeOf(o1), Object.prototype);
