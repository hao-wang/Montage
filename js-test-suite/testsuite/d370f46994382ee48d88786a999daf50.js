load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 23.3.3.2
description: Throws TypeError if `this` is not Object.
info: >
  WeakMap.prototype.delete ( value )

  1. Let M be the this value.
  2. If Type(M) is not Object, throw a TypeError exception.
---*/

assert.throws(TypeError, function() {
  WeakMap.prototype.delete.call(false, {});
});

assert.throws(TypeError, function() {
  var map = new WeakMap();
  map.delete.call(false, {});
});
