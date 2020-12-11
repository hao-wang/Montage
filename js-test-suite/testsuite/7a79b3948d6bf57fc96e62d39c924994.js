load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    When String is called as a function rather than as a constructor, it
    performs a type conversion
es5id: 15.5.1.1_A1_T7
description: Call String({})
---*/

var __str = String({});

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (typeof __str !== "string") {
  $ERROR('#1: __str = String({}); typeof __str === "string". Actual: typeof __str ==='+typeof __str ); 
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__str !== "[object "+"Object"+"]") {
  $ERROR('#2: __str = String({}); __str === "[object Object]". Actual: __str ==='+__str ); 
}
//
//////////////////////////////////////////////////////////////////////////////
