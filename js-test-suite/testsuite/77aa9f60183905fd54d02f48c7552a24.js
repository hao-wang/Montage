load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 22.1.3.3
description: >
  Returns `this`.
info: >
  22.1.3.3 Array.prototype.copyWithin (target, start [ , end ] )

  18. Return O.
---*/

var arr = [];
var result = arr.copyWithin(0, 0);

assert.sameValue(result, arr);

var o = {
  length: 0
};
result = Array.prototype.copyWithin.call(o, 0, 0);
assert.sameValue(result, o);
