load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * If Type(Primitive(x)) is not String or Type(Primitive(y)) is not String, then operator x < y returns ToNumber(x) < ToNumber(y)
 *
 * @path ch11/11.8/11.8.1/S11.8.1_A3.1_T2.7.js
 * @description Type(Primitive(x)) is different from Type(Primitive(y)) and both types vary between String (primitive or object) and Null
 */

//CHECK#1
if ("1" < null !== false) {
  $ERROR('#1: "1" < null === false');
}

//CHECK#2
if (null < "1" !== true) {
  $ERROR('#2: null < "1" === true');
}

//CHECK#3
if (new String("1") < null !== false) {
  $ERROR('#3: new String("1") < null === false');
}

//CHECK#4
if (null < new String("1") !== true) {
  $ERROR('#4: null < new String("1") === true');
}

