load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The production x /= y is the same as x = x / y
es5id: 11.13.2_A4.2_T1.1
description: >
    Type(x) and Type(y) vary between primitive boolean and Boolean
    object
---*/

var x;

//CHECK#1
x = true;
x /= true;
if (x !== 1) {
  $ERROR('#1: x = true; x /= true; x === 1. Actual: ' + (x));
}

//CHECK#2
x = new Boolean(true);
x /= true;
if (x !== 1) {
  $ERROR('#2: x = new Boolean(true); x /= true; x === 1. Actual: ' + (x));
}

//CHECK#3
x = true;
x /= new Boolean(true);
if (x !== 1) {
  $ERROR('#3: x = true; x /= new Boolean(true); x === 1. Actual: ' + (x));
}

//CHECK#4
x = new Boolean(true);
x /= new Boolean(true);
if (x !== 1) {
  $ERROR('#4: x = new Boolean(true); x /= new Boolean(true); x === 1. Actual: ' + (x));
}
