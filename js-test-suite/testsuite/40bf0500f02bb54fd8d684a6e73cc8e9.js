load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Multi line comments cannot nest
 *
 * @path ch07/7.4/S7.4_A3.js
 * @description Try use nested comments
 * @negative
 */

/*CHECK#1*/

/* 
var

/* x */
= 1;
*/

