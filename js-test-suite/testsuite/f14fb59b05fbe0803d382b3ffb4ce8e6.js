load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    The abtract operation ToPropertyDescriptor  is used to package the
    into a property desc. Step 10 of ToPropertyDescriptor throws a TypeError
    if the property desc ends up having a mix of accessor and data property elements.
es5id: 15.2.3.6-3-7
description: >
    Object.defineProperty throws TypeError if getter is not callable
    but not undefined (String)(8.10.5 step 7.b)
---*/

    var o = {};
    
    // dummy getter
    var getter = "abc";
    var desc = { get: getter };
assert.throws(TypeError, function() {
      Object.defineProperty(o, "foo", desc);
});
assert.sameValue(o.hasOwnProperty("foo"), false, 'o.hasOwnProperty("foo")');
