load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("352fc54052b657308832185e13cd17c9.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.prototype.keys
description: Throws a TypeError exception when `this` is not Object
info: >
  22.2.3.16 %TypedArray%.prototype.keys ( )

  The following steps are taken:

  1. Let O be the this value.
  2. Perform ? ValidateTypedArray(O).
  ...

  22.2.3.5.1 Runtime Semantics: ValidateTypedArray ( O )

  1. If Type(O) is not Object, throw a TypeError exception.
  ...
includes: [testTypedArray.js]
features: [Symbol]
---*/

var keys = TypedArray.prototype.keys;

assert.throws(TypeError, function() {
  keys.call(undefined);
}, "this is undefined");

assert.throws(TypeError, function() {
  keys.call(null);
}, "this is null");

assert.throws(TypeError, function() {
  keys.call(42);
}, "this is 42");

assert.throws(TypeError, function() {
  keys.call("1");
}, "this is a string");

assert.throws(TypeError, function() {
  keys.call(true);
}, "this is true");

assert.throws(TypeError, function() {
  keys.call(false);
}, "this is false");

var s = Symbol("s");
assert.throws(TypeError, function() {
  keys.call(s);
}, "this is a Symbol");