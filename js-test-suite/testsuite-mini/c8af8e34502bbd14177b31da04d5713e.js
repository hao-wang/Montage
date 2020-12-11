load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * If y is -Infinity, return true
 *
 * @path ch11/11.8/11.8.4/S11.8.4_A4.8.js
 * @description x is number primitive
 */

//CHECK#1
if ((0 >= Number.NEGATIVE_INFINITY) !== true) {
  $ERROR('#1: (0 >= -Infinity) === true');
}

//CHECK#2
if ((1.1 >= Number.NEGATIVE_INFINITY) !== true) {
  $ERROR('#2: (1.1 >= -Infinity) === true');
}

//CHECK#3
if ((-1.1 >= Number.NEGATIVE_INFINITY) !== true) {
  $ERROR('#3: (-1.1 >= -Infinity) === true');
}

//CHECK#4
if ((Number.POSITIVE_INFINITY >= Number.NEGATIVE_INFINITY) !== true) {
  $ERROR('#4: (+Infinity >= -Infinity) === true');
}

//CHECK#5
if ((Number.MAX_VALUE >= Number.NEGATIVE_INFINITY) !== true) {
  $ERROR('#5: (Number.MAX_VALUE >= -Infinity) === true');
}

//CHECK#6
if ((Number.MIN_VALUE >= Number.NEGATIVE_INFINITY) !== true) {
  $ERROR('#6: (Number.MIN_VALUE >= -Infinity) === true');
}


