load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("45e1d6de6cbdd6f2ea33d472d566096a.js");
/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

//-----------------------------------------------------------------------------
var BUGNUMBER = 293782;
var summary = 'Local variables can cause predefined function object properties to be undefined';
var actual = '';
var expect = '';

printBugNumber(BUGNUMBER);
printStatus (summary);

function f()
{
  var name=1;
}

expect = 'f';
actual = f.name;
 
reportCompare(expect, actual, summary);
