load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 11.1.5_4-4-d-4
description: >
    Object literal - No SyntaxError for duplicate property name
    (set,get,set)
---*/

  eval("({set foo(arg){}, get foo(){}, set foo(arg1){}});");