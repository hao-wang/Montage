load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: String.prototype.search (regexp)
es5id: 15.5.4.12_A1_T10
description: >
    Argument is object, and instance is string.  Object with overrided
    toString function
---*/

var __obj = {toString:function(){return "\u0041B";}};
var __str = "ssABB\u0041BABAB";

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
  if (__str.search(__obj) !==2) {
    $ERROR('#1: var __obj = {toString:function(){return "\u0041B";}}; var __str = "ssABB\u0041BABAB"; __str.search(__obj) ===2. Actual: '+__str.search(__obj) );
  }
//
//////////////////////////////////////////////////////////////////////////////

var x;
