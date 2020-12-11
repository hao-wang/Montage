load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The value of Math.floor(x) is the same as the value of -Math.ceil(-x)
es5id: 15.8.2.9_A7
description: >
    Checking if Math.floor(x) is equal to -Math.ceil(-x) on 2000
    floating-point argument values
---*/

// CHECK#1
for (var i=-1000; i<1000; i++)
{
	var x = i/10.0;
	if (-Math.ceil(-x) !== Math.floor(x))
	{
		$ERROR("#1: 'x = " + x + "; Math.floor(x) !== -Math.ceil(-x)'");
	}
}
