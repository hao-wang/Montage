load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: "\"continue\" statement within a \"while\" Statement is allowed"
es5id: 12.6.2_A8
description: using eval
---*/

var __evaluated;
var __condition = 0, __odds=0;

__evaluated = eval("while(__condition < 10) { __condition++; if (((''+__condition/2).split('.')).length>1) continue; __odds++;}");

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__odds !== 5) {
	$ERROR('#1: __odds === 5. Actual:  __odds ==='+ __odds  );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__evaluated !== 4) {
	$ERROR('#2: __evaluated === 4. Actual:  __evaluated ==='+ __evaluated  );
}
//
//////////////////////////////////////////////////////////////////////////////
