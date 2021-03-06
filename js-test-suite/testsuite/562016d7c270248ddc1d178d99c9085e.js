load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("45e1d6de6cbdd6f2ea33d472d566096a.js");
/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

//-----------------------------------------------------------------------------
var BUGNUMBER = 244619;
var summary = 'Don\'t Crash';
var actual = 'Crash';
var expect = 'No Crash';

printBugNumber(BUGNUMBER);
printStatus (summary);

function f1()
{
  var o = new Object();
  eval.call(o, "var a = 'vodka'"); // <- CRASH !!!
}

// Rhino does not allow indirect eval calls
try
{
  f1();
}
catch(e)
{
}

actual = 'No Crash';
 
reportCompare(expect, actual, summary);
