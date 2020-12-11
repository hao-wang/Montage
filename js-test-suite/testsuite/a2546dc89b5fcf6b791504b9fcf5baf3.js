load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: String.prototype.search (regexp)
es5id: 15.5.4.12_A1_T12
description: >
    Argument is object, and instance is string.  Object with overrided
    toString and valueOf functions, valueOf throw exception
---*/

var __obj = {toString:function(){return {};},valueOf:function(){throw "intostr";}}
var __str = new String("ABB\u0041BABAB");

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
    try {
      var x = __str.search(__obj);
      $ERROR('#1: var x = __str.search(__obj) lead to throwing exception');
    } catch (e) {
      if (e!=="intostr") {
        $ERROR('#1.1: Exception === "intostr". Actual: '+e);
      }
    }
//
//////////////////////////////////////////////////////////////////////////////
