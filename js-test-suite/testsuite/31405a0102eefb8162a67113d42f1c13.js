load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Multi line comment can contain VERTICAL TAB (U+000B)
 *
 * @path ch07/7.2/S7.2_A4.2_T2.js
 * @description Use real VERTICAL TAB
 */

/*CHECK#1*/
var x = 0;
/*multilinecommentx = 1;*/
if (x !== 0) {
  $ERROR('#1: var x = 0; /*multilinecommentx = 1;*/ x === 0. Actual: ' + (x));
}

