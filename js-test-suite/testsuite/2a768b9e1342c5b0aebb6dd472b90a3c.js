load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    The HomeObject of Functions declared as methods is the Object prototype.
es6id: 14.3.8
features: [super]
---*/

var obj = {
  method() {
    return super.toString;
  }
};

obj.toString = null;

assert.sameValue(obj.method(), Object.prototype.toString);