load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * ToNumber(first expression) is called first, and then ToNumber(second expression)
 *
 * @path ch11/11.5/11.5.2/S11.5.2_A2.3_T1.js
 * @description Checking with "throw"
 */

//CHECK#1
var x = { valueOf: function () { throw "x"; } };
var y = { valueOf: function () { throw "y"; } };
try {
   x / y;
   $ERROR('#1.1: var x = { valueOf: function () { throw "x"; } }; var y = { valueOf: function () { throw "y"; } }; x / y throw "x". Actual: ' + (x / y));
} catch (e) {
   if (e === "y") {
     $ERROR('#1.2: ToNumber(first expression) is called first, and then ToNumber(second expression)');
   } else {
     if (e !== "x") {
       $ERROR('#1.3: var x = { valueOf: function () { throw "x"; } }; var y = { valueOf: function () { throw "y"; } }; x / y throw "x". Actual: ' + (e));
     }
   }
}

