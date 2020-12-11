load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 23.4.1.1
description: >
  If the iterable argument is undefined, return new Weakset object.
info: >
  23.4.1.1 WeakSet ( [ iterable ] )

  ...
  7. Else,
    d. Let iter be GetIterator(iterable).
    e. ReturnIfAbrupt(iter).
  ...
---*/

assert.throws(TypeError, function() {
  new WeakSet({});
});