load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The encodeURIComponent property has not prototype property
es5id: 15.1.3.4_A5.6
description: Checking encodeURIComponent.prototype
---*/

//CHECK#1
if (encodeURIComponent.prototype !== undefined) {
  $ERROR('#1: encodeURIComponent.prototype === undefined. Actual: ' + (encodeURIComponent.prototype));
}
