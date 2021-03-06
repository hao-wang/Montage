load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 9.5.9
description: >
    [[Set]] ( P, V, Receiver)

    11. If booleanTrapResult is false, return false.
features: [Reflect]
---*/

var target = {};
var handler = {
    set: function(t, prop, value, receiver) {
        return null;
    }
};
var p = new Proxy(target, handler);

assert.sameValue(Reflect.set(p, "attr", "foo"), false);
