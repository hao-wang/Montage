load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: TypeError is subclass of Error from instanceof operator point of view
es5id: 11.8.6_A5_T1
description: Checking Error case
---*/

var __err = new Error;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (!(__err instanceof Error)) {
	$ERROR('#1: TypeError is subclass of Error from instanceof operator point of view');
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__err instanceof TypeError) {
	$ERROR('#2: TypeError is subclass of Error from instanceof operator point of view');
}
//
//////////////////////////////////////////////////////////////////////////////

var err__ = Error('failed');

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if (!(err__ instanceof Error)) {
	$ERROR('#3: TypeError is subclass of Error from instanceof operator point of view');
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#4
if (err__ instanceof TypeError) {
	$ERROR('#4: TypeError is subclass of Error from instanceof operator point of view');
}
//
//////////////////////////////////////////////////////////////////////////////
