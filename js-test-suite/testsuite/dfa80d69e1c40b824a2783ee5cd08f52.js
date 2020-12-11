load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    Assume F is a Function object. When the [[HasInstance]] method of F is
    called with value V, the following steps are taken: i) If V is not an
    object, return false
es5id: 15.3.5.3_A1_T6
description: V is null
---*/

var FACTORY;
FACTORY = Function("name","this.name=name;");

//CHECK#1
if ((null instanceof  FACTORY)!==false) {
  $ERROR('#1: Assume F is a Function object. When the [[HasInstance]] method of F is called with value V, the following steps are taken: i) If V is not an object, return false');
}