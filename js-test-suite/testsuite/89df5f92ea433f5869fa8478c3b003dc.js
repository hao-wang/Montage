load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 26.1.12
description: >
  Always returns true when target is an ordinary object.
info: >
  26.1.12 Reflect.preventExtensions ( target )

  ...
  2. Return target.[[PreventExtensions]]().

  9.1.4 [[PreventExtensions]] ( )

  1. Set the value of the [[Extensible]] internal slot of O to false.
  2. Return true.
---*/

var o = {};
assert.sameValue(
  Reflect.preventExtensions(o), true,
  'returns true after preventing extentions on an object'
);
assert.sameValue(
  Reflect.preventExtensions(o), true,
  'returns true even if the object already prevents extentions'
);
