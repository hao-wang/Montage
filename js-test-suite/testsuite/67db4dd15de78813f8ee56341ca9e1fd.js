load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Operator remove leading StrWhiteSpaceChar
es5id: 15.1.2.3_A2_T8
description: "StrWhiteSpaceChar :: LS (U+2028)"
---*/

//CHECK#1
if (parseFloat("\u20281.1") !== parseFloat("1.1")) {
  $ERROR('#1: parseFloat("\\u20281.1") === parseFloat("1.1"). Actual: ' + (parseFloat("\u20281.1")));
}

//CHECK#2
if (parseFloat("\u2028\u2028-1.1") !== parseFloat("-1.1")) {
  $ERROR('#2: parseFloat("\\u2028\\u2028-1.1") === parseFloat("-1.1"). Actual: ' + (parseFloat("\u2028\u2028-1.1")));
}

//CHECK#3
assert.sameValue(parseFloat("\u2028"), NaN);
