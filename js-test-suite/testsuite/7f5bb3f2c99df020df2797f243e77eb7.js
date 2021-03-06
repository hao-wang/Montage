load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Variable instantiation is performed using the global object as
 * the variable object and using property attributes { DontDelete }
 *
 * @path ch10/10.4/10.4.1/S10.4.1_A1_T1.js
 * @description Checking if deleting variable x, that is defined as var x = 1, fails
 * @noStrict
 */

var x = 1;

if (this.x !== 1) {
  $ERROR("#1: variable x is a property of global object");
}

if(delete this.x !== false){
  $ERROR("#2: variable x has property attribute DontDelete");
}

