load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 13.2-19-b-3gs
description: >
    StrictMode - error is thrown when assign a value to the 'caller'
    property of a function object
flags: [onlyStrict]
---*/

function _13_2_19_b_3_gs() {}

assert.throws(TypeError, function() {
  _13_2_19_b_3_gs.caller = 1;
});