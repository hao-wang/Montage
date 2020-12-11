load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    Number instances have no special properties beyond those
    inherited from the Number prototype object
es5id: 15.7.5_A1_T04
description: Checking property valueOf
---*/

//CHECK#1
if((new Number()).hasOwnProperty("valueOf") !== false){
  $ERROR('#1: Number instance must have no special property "valueOf"');
}

//CHECK#2
if((new Number()).valueOf !== Number.prototype.valueOf){
  $ERROR('#2: Number instance property "valueOf" must be inherited from Number prototype object');
}
