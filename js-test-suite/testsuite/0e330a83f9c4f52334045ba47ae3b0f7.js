load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: If x is +Infinity, Math.log(x) is +Infinity
es5id: 15.8.2.10_A5
description: Checking if Math.log(+Infinity) equals to +Infinity
---*/

// CHECK#1
var x = +Infinity;
if (Math.log(x) !== +Infinity)
{
	$ERROR("#1: 'var x=+Infinity; Math.log(x) !== +Infinity'");
}
