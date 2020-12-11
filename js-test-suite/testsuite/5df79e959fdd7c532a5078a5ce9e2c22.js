load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 9.5.7
description: >
    The result of [[HasProperty]] is a Boolean value and will affect has
    checkings. True returned when target property doesn't exists;
---*/

var p = new Proxy({}, {
    has: function(t, prop) {
        return true;
    }
});

assert.sameValue(("attr" in p), true);
