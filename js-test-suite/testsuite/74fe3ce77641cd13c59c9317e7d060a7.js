load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("e7298b87458610fb43224d2d0185d930.js");
/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

//-----------------------------------------------------------------------------
var BUGNUMBER = 469405;
var summary = 'Do not assert: !regs.sp[-2].isPrimitive()';
var actual = '';
var expect = '';

printBugNumber(BUGNUMBER);
printStatus (summary);

try
{ 
  eval("__proto__.__iterator__ = [].toString");
  for (var z = 0; z < 3; ++z) { if (z % 3 == 2) { for(let y in []); } }
}
catch(ex)
{
  print('caught ' + ex);
}

reportCompare(expect, actual, summary);
