load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    An Atom followed by a Quantifier is repeated the number of times
    specified by the Quantifier
es5id: 15.10.2.5_A1_T3
description: Execute /(aa|aabaac|ba|b|c)* /.exec("aabaac") and check results
---*/

var __executed = /(aa|aabaac|ba|b|c)*/.exec("aabaac");

var __expected = ["aaba", "ba"];
__expected.index = 0;
__expected.input = "aabaac";

//CHECK#1
if (__executed.length !== __expected.length) {
	$ERROR('#1: __executed = /(aa|aabaac|ba|b|c)*/.exec("aabaac"); __executed.length === ' + __expected.length + '. Actual: ' + __executed.length);
}

//CHECK#2
if (__executed.index !== __expected.index) {
	$ERROR('#2: __executed = /(aa|aabaac|ba|b|c)*/.exec("aabaac"); __executed.index === ' + __expected.index + '. Actual: ' + __executed.index);
}

//CHECK#3
if (__executed.input !== __expected.input) {
	$ERROR('#3: __executed = /(aa|aabaac|ba|b|c)*/.exec("aabaac"); __executed.input === ' + __expected.input + '. Actual: ' + __executed.input);
}

//CHECK#4
for(var index=0; index<__expected.length; index++) {
	if (__executed[index] !== __expected[index]) {
		$ERROR('#4: __executed = /(aa|aabaac|ba|b|c)*/.exec("aabaac"); __executed[' + index + '] === ' + __expected[index] + '. Actual: ' + __executed[index]);
	}
}
