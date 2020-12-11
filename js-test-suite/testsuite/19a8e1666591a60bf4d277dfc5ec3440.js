load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: String.prototype.localeCompare(that)
es5id: 15.5.4.9_A1_T2
description: >
    Call string_1.localeCompare(string_2) is equal
    -string_2.localeCompare(string_1)
---*/

//CHECK#1
var str1 = "h";
var str2 = "H";
if (str1.localeCompare(str2)!==-str2.localeCompare(str1)){
  $ERROR('#1.1: var str1 = "h"; var str2 = "H"; str1.localeCompare(str2)===-str2.localeCompare(str1). Actual: '+str1.localeCompare(str2));
}