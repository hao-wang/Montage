load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 The V8 Project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 20.2.2.11
esid: sec-math.clz32
description: >
  Return 32 if x is NaN
info: |
  Math.clz32 ( x )

  1. Let n be ToUint32(x).
  2. Let p be the number of leading zero bits in the 32-bit binary representation of n.
  3. Return p.

  7.1.6 ToUint32 ( argument )

  [...]
  2. If number is NaN, +0, -0, +∞, or -∞, return +0.
  [...]
---*/

assert.sameValue(Math.clz32(NaN), 32);
