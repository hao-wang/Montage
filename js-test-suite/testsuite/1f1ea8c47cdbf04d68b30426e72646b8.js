load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 23.4.3.3
description: >
  Throws TypeError if context doesn't have a [[WeakSetData]] internal slot.
info: >
  WeakSet.prototype.delete ( value )

  ...
  3. If S does not have a [[WeakSetData]] internal slot, throw a TypeError
  exception.
  ...
---*/

assert.throws(TypeError, function() {
  WeakSet.prototype.delete.call(new Map(), {});
});

assert.throws(TypeError, function() {
  var s = new WeakSet();
  s.delete.call(new Map(), {});
});
