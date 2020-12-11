load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Operator remove leading StrWhiteSpaceChar
es5id: 15.1.2.2_A2_T5
description: "StrWhiteSpaceChar :: VT (U+000B)"
---*/

//CHECK#1
if (parseInt("\u000B1") !== parseInt("1")) {
  $ERROR('#1: parseInt("\\u000B1") === parseInt("1"). Actual: ' + (parseInt("\u000B1")));
}

//CHECK#2
if (parseInt("\u000B\u000B-1") !== parseInt("-1")) {
  $ERROR('#2: parseInt("\\u000B\\u000B-1") === parseInt("-1"). Actual: ' + (parseInt("\u000B\u000B-1")));
}

//CHECK#3
assert.sameValue(parseInt("\u000B"), NaN);
