load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.12-2-c-2
description: >
    Object.isFrozen returns false if 'O' contains own configurable
    accessor property
---*/

        var obj = {};

        function get_func() {
            return 10;
        }
        function set_func() { }

        Object.defineProperty(obj, "foo", {
            get: get_func,
            set: set_func,
            configurable: true
        });

        Object.preventExtensions(obj);

assert.sameValue(Object.isFrozen(obj), false, 'Object.isFrozen(obj)');
