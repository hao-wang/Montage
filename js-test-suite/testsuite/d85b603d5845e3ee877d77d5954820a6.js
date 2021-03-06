load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("352fc54052b657308832185e13cd17c9.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.prototype.some
description: Throws a TypeError if callbackfn is not callable
info: >
  22.2.3.25 %TypedArray%.prototype.some ( callbackfn [ , thisArg ] )

  %TypedArray%.prototype.some is a distinct function that implements the same
  algorithm as Array.prototype.some as defined in 22.1.3.24 except that the this
  object's [[ArrayLength]] internal slot is accessed in place of performing a
  [[Get]] of "length".

  22.1.3.24 Array.prototype.some ( callbackfn [ , thisArg ] )

  ...
  3. If IsCallable(callbackfn) is false, throw a TypeError exception.
  ...
includes: [testTypedArray.js]
features: [Symbol]
---*/

testWithTypedArrayConstructors(function(TA) {
  var sample = new TA(2);

  assert.throws(TypeError, function() {
    sample.some();
  }, "no args");

  assert.throws(TypeError, function() {
    sample.some(null);
  }, "null");

  assert.throws(TypeError, function() {
    sample.some(undefined);
  }, "undefined");

  assert.throws(TypeError, function() {
    sample.some("abc");
  }, "string");

  assert.throws(TypeError, function() {
    sample.some(1);
  }, "number");

  assert.throws(TypeError, function() {
    sample.some(NaN);
  }, "NaN");

  assert.throws(TypeError, function() {
    sample.some(false);
  }, "false");

  assert.throws(TypeError, function() {
    sample.some(true);
  }, "true");

  assert.throws(TypeError, function() {
    sample.some({});
  }, "{}");

  assert.throws(TypeError, function() {
    sample.some(sample);
  }, "same typedArray instance");

  assert.throws(TypeError, function() {
    sample.some(Symbol("1"));
  }, "symbol");
});
