load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.3.4.5-6-5
description: Function.prototype.bind - F can get own accessor property
---*/

        var foo = function () { };

        var obj = foo.bind({});
        Object.defineProperty(obj, "property", {
            get: function () {
                return 12;
            }
        });

assert.sameValue(obj.property, 12, 'obj.property');
