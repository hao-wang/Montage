load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("e7298b87458610fb43224d2d0185d930.js");
/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

//-----------------------------------------------------------------------------
var BUGNUMBER = 390918;
var summary = 'Do not assert: !gen->frame.down" with gc in generator';
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
 
  function gen()
  {
    var c = [1, "x"];
    gc();
    try {
      yield c;
    } finally {
      gc();
    }
  }

  var iter = gen();
  var i;
  for (i in iter) {
    gc();
    iter.close();
  }

  if (!(i.length === 2 && i[0] === 1 && i[1] === "x"))
    throw "Unexpected yield result: "+i;

  reportCompare(expect, actual, summary);

  exitFunc ('test');
}
