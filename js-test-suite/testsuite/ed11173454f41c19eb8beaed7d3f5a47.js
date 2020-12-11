load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("45e1d6de6cbdd6f2ea33d472d566096a.js");
/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

//-----------------------------------------------------------------------------
var BUGNUMBER = 472599;
var summary = 'Do not assert: STOBJ_GET_SLOT(callee_obj, JSSLOT_PRIVATE).isInt32()';
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
 

  var a = (function(){}).prototype;
  a.__proto__ = a.toString;
  for (var i = 0; i < 4; ++i) { try{ a.call({}); } catch(e) { } }


  reportCompare(expect, actual, summary);

  exitFunc ('test');
}
