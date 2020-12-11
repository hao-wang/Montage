load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-8-b-i-3
description: >
    Array.prototype.lastIndexOf - element to be retrieved is own data
    property that overrides an inherited data property on an Array
---*/

            Array.prototype[0] = Object;

assert.sameValue([Object.prototype].lastIndexOf(Object.prototype), 0, '[Object.prototype].lastIndexOf(Object.prototype)');
