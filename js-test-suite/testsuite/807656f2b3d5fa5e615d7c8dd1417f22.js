load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The length property of the charAt method is 1
es5id: 15.5.4.4_A11
description: Checking String.prototype.charAt.length
---*/

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (!(String.prototype.charAt.hasOwnProperty("length"))) {
  $ERROR('#1: String.prototype.charAt.hasOwnProperty("length") return true. Actual: '+String.prototype.charAt.hasOwnProperty("length")); 
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (String.prototype.charAt.length !== 1) {
  $ERROR('#2: String.prototype.charAt.length === 1. Actual: '+String.prototype.charAt.length ); 
}
//
//////////////////////////////////////////////////////////////////////////////
