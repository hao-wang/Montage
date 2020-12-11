load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: "[[Get]] from not an inherited property"
es5id: 15.4.4.2_A3_T1
description: "[[Prototype]] of Array instance is Array.prototype"
---*/

//CHECK#1
Array.prototype[1] = 1;
var x = [0];
x.length = 2;
if (x.toString() !== "0,1") {  
  $ERROR('#1: Array.prototype[1] = 1; x = [0]; x.length = 2; x.toString() === "0,1". Actual: ' + (x.toString()));    
}
