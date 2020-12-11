load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-string.prototype.localecompare
es6id: 21.1.3.10
description: The "this" value must be object-coercible
info: |
  1. Let O be ? RequireObjectCoercible(this value).
---*/

var localeCompare = String.prototype.localeCompare;

assert.sameValue(typeof localeCompare, 'function');

assert.throws(TypeError, function() {
  localeCompare.call(undefined, '');
}, 'undefined');

assert.throws(TypeError, function() {
  localeCompare.call(null, '');
}, 'null');
