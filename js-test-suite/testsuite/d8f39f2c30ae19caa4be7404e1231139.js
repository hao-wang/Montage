load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The length property of parseInt is 2
es5id: 15.1.2.2_A9.4
description: parseInt.length === 2
---*/

//CHECK#1
if (parseInt.length !== 2) {
  $ERROR('#1: parseInt.length === 2. Actual: ' + (parseInt.length));
}
