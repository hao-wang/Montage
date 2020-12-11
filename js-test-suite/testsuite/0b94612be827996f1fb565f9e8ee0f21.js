load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("45e1d6de6cbdd6f2ea33d472d566096a.js");
/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

//-----------------------------------------------------------------------------
var BUGNUMBER = 361571;
var summary = 'Do not assert: fp->scopeChain == parent';
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

  try
  {
    o = {};
    o.__defineSetter__('y', eval);
    o.watch('y', function () { return "";});
    o.y = 1;
  }
  catch(ex)
  {
    printStatus('Note eval can no longer be called directly');
    expect = 'EvalError: function eval must be called directly, and not by way of a function of another name';
    actual = ex + '';
  }
  reportCompare(expect, actual, summary);

  exitFunc ('test');
}
