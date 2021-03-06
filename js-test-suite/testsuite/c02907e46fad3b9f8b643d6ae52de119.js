load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 19.5.6.3
description: >
  TypeError.prototype is not an error object instance.
info: >
  Each NativeError prototype object is an ordinary object. It is not an
  Error instance and does not have an [[ErrorData]] internal slot.
---*/

assert.sameValue(Object.prototype.toString.call(TypeError.prototype), "[object Object]");
