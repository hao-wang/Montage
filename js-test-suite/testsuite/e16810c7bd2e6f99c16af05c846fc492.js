load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Operator remove leading StrWhiteSpaceChar
es5id: 15.1.2.2_A2_T1
description: "StrWhiteSpaceChar :: TAB (U+0009)"
---*/

//CHECK#1
if (parseInt("\u00091") !== parseInt("1")) {
  $ERROR('#1: parseInt("\\u00091") === parseInt("1"). Actual: ' + (parseInt("\u00091")));
}

//CHECK#2
if (parseInt("\u0009\u0009-1") !== parseInt("-1")) {
  $ERROR('#2: parseInt("\\u0009\\u0009-1") === parseInt("-1"). Actual: ' + (parseInt("\u0009\u0009-1")));
}

//CHECK#3
if (parseInt("	1") !== parseInt("1")) {
  $ERROR('#3: parseInt("	1") === parseInt("1"). Actual: ' + (parseInt("	1")));
}

//CHECK#4
if (parseInt("			1") !== parseInt("1")) {
  $ERROR('#4: parseInt("			1") === parseInt("1"). Actual: ' + (parseInt("			1")));
}

//CHECK#5
if (parseInt("			\u0009			\u0009-1") !== parseInt("-1")) {
  $ERROR('#5: parseInt("			\\u0009			\\u0009-1") === parseInt("-1"). Actual: ' + (parseInt("			\u0009			\u0009-1")));
}

//CHECK#6
assert.sameValue(parseInt("\u0009"), NaN);
