load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 The V8 Project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 20.1.3.5
esid: sec-number.prototype.toprecision
description: >
  ToInteger(precision) operations
info: |
  Number.prototype.toPrecision ( precision )

  [...]
  3. Let p be ? ToInteger(precision).
  [...]
---*/

assert.sameValue((123.456).toPrecision(1.1), "1e+2", "1.1");
assert.sameValue((123.456).toPrecision(1.9), "1e+2", "1.9");

assert.sameValue((123.456).toPrecision(true), "1e+2", "true");

assert.sameValue((123.456).toPrecision("2"), "1.2e+2", "string");

assert.sameValue((123.456).toPrecision([2]), "1.2e+2", "[2]");
