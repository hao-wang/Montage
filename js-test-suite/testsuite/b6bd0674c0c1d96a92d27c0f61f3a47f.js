load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.12.3_2-2-b-i-1
description: >
    JSON.stringify converts string wrapper objects returned from a
    toJSON call to literal strings.
---*/

  var obj = {
    prop:42,
    toJSON: function () {return 'fortytwo objects'}
    };

assert.sameValue(JSON.stringify([obj]), '["fortytwo objects"]', 'JSON.stringify([obj])');
