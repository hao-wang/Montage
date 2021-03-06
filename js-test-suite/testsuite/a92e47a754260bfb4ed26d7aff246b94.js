load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: String.prototype.replace (searchValue, replaceValue)
es5id: 15.5.4.11_A1_T5
description: >
    Call replace (searchValue, replaceValue) function with null and
    Function() arguments of function object
---*/

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (function(){return "gnulluna"}().replace(null, Function()) !== "gundefineduna") {
  $ERROR('#1: function(){return "gnulluna"}().replace(null, Function()) === "gundefineduna". Actual: '+function(){return "gnulluna"}().replace(null, Function()) );
}
//
//////////////////////////////////////////////////////////////////////////////
