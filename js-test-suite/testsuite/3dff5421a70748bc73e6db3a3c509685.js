load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * [[hasProperty]] is sensitive to property existence but [[Get]] is not
 *
 * @path ch08/8.12/8.12.6/S8.12.6_A3.js
 * @description Use [[hasProperty]] and [[Get]] for existent and not existent properties
 */

var __obj={}; __obj.hole=undefined;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__obj.hole !== undefined) {
  $ERROR('#1: var __obj={}; __obj.hole=undefined; __obj.hole === undefined. Actual: ' + (__obj.hole));
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__obj.notexist !== undefined) {
  $ERROR('#2: var __obj={}; __obj.hole=undefined; __obj.notexist === undefined. Actual: ' + (__obj.notexist));
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if (!("hole" in __obj)) {
  $ERROR('#3: var __obj={}; __obj.hole=undefined; "hole" in __obj');
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#4
if (("notexist" in __obj)) {
  $ERROR('#4: var __obj={}; __obj.hole=undefined; "notexist" in __obj');
}
//
//////////////////////////////////////////////////////////////////////////////

