load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 11.13.1-2-s
description: >
    Strict Mode - TypeError is thrown if The LeftHandSide is a
    reference to an accessor property with the attribute value
    {[[Set]]:undefined} under strict mode
flags: [onlyStrict]
---*/

        var obj = {};
        Object.defineProperty(obj, "prop", {
            get: function () {
                return 11;
            },
            set: undefined,
            enumerable: true,
            configurable: true
        });
assert.throws(TypeError, function() {
            obj.prop = 20;
});
assert.sameValue(obj.prop, 11, 'obj.prop');
