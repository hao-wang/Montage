load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 23.4.3.4
description: >
  Throws TypeError if context doesn't have a [[WeakSetData]] internal slot.
info: >
  WeakSet.prototype.has ( value )

  ...
  3. If S does not have a [[WeakSetData]] internal slot, throw a TypeError
  exception.
  ...
features: [Set]
---*/

assert.throws(TypeError, function() {
  WeakSet.prototype.has.call(new Set(), {});
});

assert.throws(TypeError, function() {
  var s = new WeakSet();
  s.has.call(new Set(), {});
});
