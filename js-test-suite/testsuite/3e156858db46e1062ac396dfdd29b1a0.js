load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 9.5.8
description: >
    [[Get]] (P, Receiver)

    14. Return trapResult.
---*/

var target = {};
var p = new Proxy(target, {
    get: function() {
        return 2;
    }
});

Object.defineProperty(target, 'attr', {
    configurable: true,
    writable: false,
    value: 1
});

assert.sameValue(p.attr, 2);
assert.sameValue(p['attr'], 2);
