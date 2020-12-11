load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The Number constructor has the property "POSITIVE_INFINITY"
es5id: 15.7.3_A6
description: Checking existence of the property "POSITIVE_INFINITY"
---*/

if(!Number.hasOwnProperty("POSITIVE_INFINITY")){
  $ERROR('#1: The Number constructor has the property "POSITIVE_INFINITY"');
}