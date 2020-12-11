load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 22.1.3.29
description: >
  Creates an iterator from a custom object.
info: >
  22.1.3.29 Array.prototype.values ( )

  1. Let O be ToObject(this value).
  2. ReturnIfAbrupt(O).
  3. Return CreateArrayIterator(O, "value").
features: [Symbol.iterator]
---*/

var obj = {
  length: 2
};
var iter = Array.prototype.values.call(obj);
var ArrayIteratorProto = Object.getPrototypeOf([][Symbol.iterator]());

assert.sameValue(
  Object.getPrototypeOf(iter), ArrayIteratorProto,
  'The prototype of [].values() is %ArrayIteratorPrototype%'
);
