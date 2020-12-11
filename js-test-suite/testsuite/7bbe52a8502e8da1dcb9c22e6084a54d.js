load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    when String.prototype.lastIndexOf(searchString, position) is called first Call ToString, giving it the this value as its argument.
    Then Call ToString(searchString) and Call ToNumber(position)
es5id: 15.5.4.8_A4_T4
description: Override toString and valueOf functions, and they throw exceptions
---*/

var __obj = {toString:function(){throw "intostr";}};
var __obj2 = {valueOf:function(){throw "intoint";}};
var __instance = new Number(10001.10001);
Number.prototype.lastIndexOf=String.prototype.lastIndexOf;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
    try {
      var x = __instance.lastIndexOf(__obj, __obj2);
      $ERROR('#1: var x = __instance.lastIndexOf(__obj, __obj2) lead to throwing exception');
    } catch (e) {
      if (e!=="intostr") {
        $ERROR('#1.1: Exception === "intostr". Actual: '+e);
      }
    }
//
//////////////////////////////////////////////////////////////////////////////
