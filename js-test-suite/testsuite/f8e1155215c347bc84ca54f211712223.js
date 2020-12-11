load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2011 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.4.2_A13
description: If the this value is null, return "[object Null]".
---*/

if (Object.prototype.toString.call(null) !== "[object Null]") {
  $ERROR('If the this value is null, return "[object Null]".');
}