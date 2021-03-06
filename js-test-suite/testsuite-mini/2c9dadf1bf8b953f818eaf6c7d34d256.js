load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 23.3.3.4
description: >
  Throws TypeError if `this` doesn't have a [[WeakMapData]] internal slot.
info: >
  WeakMap.prototype.has ( value )

  ...
  3. If M does not have a [[WeakMapData]] internal slot, throw a TypeError
  exception.
  ...
---*/

assert.throws(TypeError, function() {
  WeakMap.prototype.has.call({}, {}, 1);
});

assert.throws(TypeError, function() {
  var map = new WeakMap();
  map.has.call({}, {}, 1);
});
