load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("e7298b87458610fb43224d2d0185d930.js");
/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

//-----------------------------------------------------------------------------
var BUGNUMBER = 453049;
var summary = 'Do not assert with JIT: (*m != JSVAL_INT) || isInt32(*vp)';
var actual = 'No Crash';
var expect = 'No Crash';

//-----------------------------------------------------------------------------
test();
//-----------------------------------------------------------------------------

function test()
{
  enterFunc ('test');
  printBugNumber(BUGNUMBER);
  printStatus (summary);
 

  var z = 0; for (let j = 0; j < 5; ++j) { ({p: (-z)}); }


  reportCompare(expect, actual, summary);

  exitFunc ('test');
}