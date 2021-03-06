load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 The V8 Project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 20.1.2.2
esid: sec-number.isfinite
description: >
  Return false if argument is NaN
info: |
  Number.isFinite ( number )

  [...]
  2. If number is NaN, +∞, or -∞, return false.
  [...]
---*/

assert.sameValue(Number.isFinite(NaN), false);
