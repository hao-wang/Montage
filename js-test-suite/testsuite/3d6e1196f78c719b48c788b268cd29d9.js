load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: String.prototype.match (regexp)
es5id: 15.5.4.10_A1_T2
description: >
    Argument is function that return boolean, and instance is Boolean
    object
---*/

var __instance = new Boolean;

__instance.match = String.prototype.match;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__instance.match(function(){return false;}())[0] !== "false") {
  $ERROR('#1: __instance = new Boolean; __instance.match = String.prototype.match;  __instance.match(function(){return false;}())[0] === "false". Actual: '+__instance.match(function(){return false;}())[0] );
}
//
//////////////////////////////////////////////////////////////////////////////
