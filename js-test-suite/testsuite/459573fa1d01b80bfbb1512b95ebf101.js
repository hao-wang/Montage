load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: If base is +0 and exponent < 0, the result is +∞.
esid: sec-applying-the-exp-operator
---*/


var base = +0;
var exponent = new Array();
exponent[0] = -Infinity;
exponent[1] = -1.7976931348623157E308; //largest (by module) finite number
exponent[2] = -1;
exponent[3] = -0.000000000000001;
var exponentnum = 4;

for (var i = 0; i < exponentnum; i++)
{
	if (Math.pow(base,exponent[i]) !== +Infinity)
	{
		$ERROR("#1: Math.pow(" + base + ", " + exponent[i] + ") !== +Infinity");
	}
}
