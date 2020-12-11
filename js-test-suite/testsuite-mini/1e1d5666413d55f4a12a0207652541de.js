load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 23.2.3.7
description: >
    Set.prototype.has ( value )

    ...
    6. Return false.

---*/

var s = new Set();

s.add(undefined);
assert.sameValue(s.has(undefined), true, "`s.has(undefined)` returns `true`");

var result = s.delete(undefined);

assert.sameValue(s.has(undefined), false, "`s.has(undefined)` returns `false`");
assert.sameValue(result, true, "The result of `s.delete(undefined)` is `true`");
