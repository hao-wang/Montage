load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Operator x++ returns x = ToNumber(x) + 1
 *
 * @path ch11/11.3/11.3.1/S11.3.1_A3_T1.js
 * @description Type(x) is boolean primitive or Boolean object
 */

//CHECK#1
var x = false; 
x++;
if (x !== 0 + 1) {
  $ERROR('#1: var x = false; x++; x === 0 + 1. Actual: ' + (x));
}

//CHECK#2
var x = new Boolean(true); 
x++; 
if (x !== 1 + 1) {
  $ERROR('#2: var x = new Boolean(true); x++; x === 1 + 1. Actual: ' + (x));
}

