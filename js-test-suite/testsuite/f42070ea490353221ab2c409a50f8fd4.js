load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 9.5.7
description: >
    Return target.[[HasProperty]](P) if trap is undefined.
info: >
    [[HasProperty]] (P)

    ...
    8. If trap is undefined, then
        a. Return target.[[HasProperty]](P).
    ...
---*/

var target = Object.create(Array.prototype);
var p = new Proxy(target, {});

assert.sameValue(("foo" in p), false);
assert.sameValue(("length" in p), true);
