load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.2-2-17
description: >
    Object.getPrototypeOf returns the [[Prototype]] of its parameter
    (URIError)
---*/

assert.sameValue(Object.getPrototypeOf(URIError), Error, 'Object.getPrototypeOf(URIError)');
