load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("6541b3270fb9a4b0727a6347f747112c.js");
// |reftest| skip -- no-op in browser, fails in shell - see bug 554793
/* -*- Mode: C++; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

//-----------------------------------------------------------------------------
var BUGNUMBER = 466905;
var summary = 'Sandbox shapes';
var actual = '';
var expect = '';


//-----------------------------------------------------------------------------
test();
//-----------------------------------------------------------------------------

function test()
{
  enterFunc ('test');
  printBugNumber(BUGNUMBER);
  printStatus (summary);

  if (typeof evalcx != 'function')
  {
    expect = actual = 'Test skipped: requires evalcx support';
  }
  else if (typeof shapeOf != 'function')
  {
    expect = actual = 'Test skipped: requires shapeOf support';
  }
  else
  {

    var s1 = evalcx('lazy');
    var s2 = evalcx('lazy');

    expect = shapeOf(s1);
    actual = shapeOf(s2);
  }

  reportCompare(expect, actual, summary);

  exitFunc ('test');
}
