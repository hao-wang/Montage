load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Operator -x returns -ToNumber(x)
 *
 * @path ch11/11.4/11.4.7/S11.4.7_A3_T3.js
 * @description Type(x) is string primitive or String object
 */

//CHECK#1
if (-"1" !== -1) {
  $ERROR('#1: -"1" === -1. Actual: ' + (-"1"));
}

//CHECK#2
if (isNaN(-"x") !== true) {
  $ERROR('#2: -"x" === Not-a-Number. Actual: ' + (-"x"));
}

//CHECK#3
if (-new String("-1") !== 1) {
  $ERROR('#3: -new String("-1") === 1. Actual: ' + (-new String("-1")));
}

