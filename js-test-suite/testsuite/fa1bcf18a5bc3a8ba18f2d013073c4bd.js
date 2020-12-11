load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 23.1.3.1
description: >
  Throws a TypeError if `this` does not have a [[MapData]] internal slot.
info: >
  Map.prototype.clear ( )

  1. Let M be the this value.
  2. If Type(M) is not Object, throw a TypeError exception.
  3. If M does not have a [[MapData]] internal slot, throw a TypeError
  exception.
  ...
---*/

assert.throws(TypeError, function() {
  Map.prototype.clear.call({});
});

assert.throws(TypeError, function() {
  Map.prototype.clear.call([]);
});
