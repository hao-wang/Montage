load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: String.prototype.toLowerCase()
es5id: 15.5.4.16_A1_T12
description: >
    Override toString and valueOf functions, valueOf throw exception,
    then call toLowerCase() function for this object
---*/

var __obj = {toString:function(){return {};},valueOf:function(){throw "intostr";}}
__obj.toLowerCase = String.prototype.toLowerCase;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
try {
  var x = __obj.toLowerCase();
 	$ERROR('#1: "var x = __obj.toLowerCase()" lead to throwing exception');
} catch (e) {
  if (e!=="intostr") {
    $ERROR('#1.1: Exception === "intostr". Actual: '+e);
  }
}
//
//////////////////////////////////////////////////////////////////////////////
