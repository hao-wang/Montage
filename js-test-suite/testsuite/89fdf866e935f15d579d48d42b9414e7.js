load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    The internal helper function CharacterRange takes two CharSet parameters A and B and performs the
    following:
    2. Let a be the one character in CharSet A.
    3. Let b be the one character in CharSet B.
    4. Let i be the character value of character a.
    5. Let j be the character value of character b.
    6. If i > j, throw a SyntaxError exception.
es5id: 15.10.2.15_A1_T21
description: >
    Checking if execution of "/[\ad-G]/.exec("a")" leads to throwing
    the correct exception
---*/

//CHECK#1
try {
  $ERROR('#1.1: /[\\ad-G]/.exec("a") throw SyntaxError. Actual: ' + (new RegExp("[\\ad-G]").exec("a")));
} catch (e) {
  if((e instanceof SyntaxError) !== true){
    $ERROR('#1.2: /[\\ad-G]/.exec("a") throw SyntaxError. Actual: ' + (e));
  }
}
