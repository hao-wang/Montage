load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    Since we deal with max(ToInteger(pos), 0) if ToInteger(pos) less than 0
    indexOf(searchString,0) returns
es5id: 15.5.4.7_A3_T3
description: >
    Call "$$abcdabcd".indexOf("ab",function(){return -Infinity;}())
    and check result
---*/

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if ("$$abcdabcd".indexOf("ab", function(){return -Infinity;}())!==2) {
  $ERROR('#1: "$$abcdabcd".indexOf("ab", function(){return -Infinity;}())===2. Actual: '+("$$abcdabcd".indexOf("ab", function(){return -Infinity;}()))); 
}
//
//////////////////////////////////////////////////////////////////////////////
