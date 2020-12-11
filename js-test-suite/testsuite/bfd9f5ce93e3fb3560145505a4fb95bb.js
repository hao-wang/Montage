load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Result of String conversion from string value is the input argument (no conversion)
 *
 * @path ch09/9.8/S9.8_A4_T2.js
 * @description Some strings convert to String by implicit transformation
 */

// CHECK#1
var x1 = "abc";
if (x1 + "" !== x1) {
  $ERROR('#1: "abc" + "" === "abc". Actual: ' + ("abc" + ""));
}

// CHECK#2
var x2 = "abc";
if (typeof x2 + "" !== typeof x2) { 
  $ERROR('#2: typeof "abc" + "" === "string". Actual: ' + (typeof "abc" + ""));
}

