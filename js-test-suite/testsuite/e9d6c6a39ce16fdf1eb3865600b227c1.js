load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The production x <<= y is the same as x = x << y
es5id: 11.13.2_A4.6_T1.3
description: Type(x) and Type(y) vary between primitive string and String object
---*/

var x;

//CHECK#1
x = "1";
x <<= "1";
if (x !== 2) {
  $ERROR('#1: x = "1"; x <<= "1"; x === 2. Actual: ' + (x));
}

//CHECK#2
x = new String("1");
x <<= "1";
if (x !== 2) {
  $ERROR('#2: x = new String("1"); x <<= "1"; x === 2. Actual: ' + (x));
}

//CHECK#3
x = "1";
x <<= new String("1");
if (x !== 2) {
  $ERROR('#3: x = "1"; x <<= new String("1"); x === 2. Actual: ' + (x));
}

//CHECK#4
x = new String("1");
x <<= new String("1");
if (x !== 2) {
  $ERROR('#4: x = new String("1"); x <<= new String("1"); x === 2. Actual: ' + (x));
}

//CHECK#5
x = "x";
x <<= "1";
if (x !== 0) {
  $ERROR('#5: x = "x"; x <<= "1"; x === 0. Actual: ' + (x));
}

//CHECK#6
x = "1";
x <<= "x";
if (x !== 1) {
  $ERROR('#6: x = "1"; x <<= "x"; x === 1. Actual: ' + (x));
}
