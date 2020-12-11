load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 21.1.3.7
description: >
  Returns abrupt from ToInteger(position) as a Symbol.
info: >
  21.1.3.7 String.prototype.includes ( searchString [ , position ] )

  ...
  9. Let pos be ToInteger(position). (If position is undefined, this step
  produces the value 0).
  10. ReturnIfAbrupt(pos).
  ...
features: [Symbol]
---*/

var position = Symbol();

assert.throws(TypeError, function() {
  ''.includes('', position);
});
