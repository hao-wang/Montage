load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The initial value of undefined is undefined
es5id: 15.1.1.3_A1
description: Use typeof, isNaN, isFinite
---*/

// CHECK#1
if (typeof(undefined) !== "undefined") {
	$ERROR('#1: typeof(undefined) === "undefined". Actual: ' + (typeof(undefined))); 
}

// CHECK#2
if (undefined !== void 0) {
	$ERROR('#2: undefined === void 0. Actual: ' + (undefined)); 
}

// CHECK#3
if (undefined !== eval("var x")) {
	$ERROR('#3: undefined === eval("var x"). Actual: ' + (undefined)); 
}
