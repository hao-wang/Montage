load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 26.1.12
description: >
  Return abrupt result.
info: >
  26.1.12 Reflect.preventExtensions ( target )

  ...
  2. Return target.[[PreventExtensions]]().
features: [Proxy]
---*/

var o1 = {};
var p = new Proxy(o1, {
  preventExtensions: function() {
    throw new Test262Error();
  }
});

assert.throws(Test262Error, function() {
  Reflect.preventExtensions(p);
});
