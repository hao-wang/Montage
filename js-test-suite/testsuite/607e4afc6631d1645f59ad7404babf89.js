load("924921a1ecafccfb4db6dd25ea7b14f2.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 10.6-13-b-1-s
description: >
    Accessing caller property of Arguments object throws TypeError in
    strict mode
flags: [onlyStrict]
---*/


assert.throws(TypeError, function() {
    arguments.caller;
});