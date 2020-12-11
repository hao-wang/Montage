load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    A property name P (in the form of a string value) is an array index
    if and only if ToString(ToUint32(P)) is equal to P and ToUint32(P) is not equal to 2^32 - 1
es5id: 15.4_A1.1_T10
description: Array index is power of two
---*/

//CHECK#
var x = [];
var k = 1;
for (var i = 0; i < 32; i++) {
  k = k * 2;
  x[k - 2] = k;  
}

k = 1;
for (i = 0; i < 32; i++) {
  k = k * 2;
  if (x[k - 2] !== k) {
    $ERROR('#' + (k - 2) + ': ');
  }     
}
