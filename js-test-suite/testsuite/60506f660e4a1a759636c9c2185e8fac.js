load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("6514743a8e7bff37c677024099be3de1.js");
/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

//-----------------------------------------------------------------------------
var BUGNUMBER = 375715;
var summary = 'Do not assert: (c2 <= cs->length) && (c1 <= c2)';
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

  try
  {
    expect = 'SyntaxError: invalid range in character class';
    (new RegExp("[\xDF-\xC7]]", "i")).exec("");
  }
  catch(ex)
  {
    actual = ex + '';
  }
  reportCompare(expect, actual, summary + '(new RegExp("[\xDF-\xC7]]", "i")).exec("")');

  exitFunc ('test');
}
