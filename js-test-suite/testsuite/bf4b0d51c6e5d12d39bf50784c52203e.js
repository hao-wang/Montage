load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("45e1d6de6cbdd6f2ea33d472d566096a.js");
load("afa91d7b356d85907550b5e9edb2d404.js");
/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/*
 *
 * Date:    29 Oct 2002
 * SUMMARY: Testing "use" and "set" operations on expressions like a[i][j][k]
 * See http://bugzilla.mozilla.org/show_bug.cgi?id=96526#c52
 *
 * Brendan: "The idea is to cover all the 'use' and 'set' (as in modify)
 * operations you can do on an expression like a[i][j][k], including variations
 * where you replace |a| with arguments (literally) and |i| with 0, 1, 2, etc.
 * (to hit the optimization for arguments[0]... that uses JSOP_ARGSUB)."
 */
//-----------------------------------------------------------------------------
var UBound = 0;
var BUGNUMBER = 96526;
var summary = 'Testing "use" and "set" ops on expressions like a[i][j][k]';
var status = '';
var statusitems = [];
var actual = '';
var actualvalues = [];
var expect= '';
var expectedvalues = [];

var z='magic';
Number.prototype.magic=42;

status = inSection(1);
actual = f(2,1,[-1,0,[1,2,[3,4]]]);
expect = 42;
addThis();


function f(j,k,a)
{
  status = inSection(2);
  actual = formatArray(a[2]);
  expect = formatArray([1,2,[3,4]]);
  addThis();

  status = inSection(3);
  actual = formatArray(a[2][j]);
  expect = formatArray([3,4]);
  addThis();

  status = inSection(4);
  actual = a[2][j][k];
  expect = 4;
  addThis();

  status = inSection(5);
  actual = a[2][j][k][z];
  expect = 42;
  addThis();

  return a[2][j][k][z];
}



//-----------------------------------------------------------------------------
test();
//-----------------------------------------------------------------------------



function addThis()
{
  statusitems[UBound] = status;
  actualvalues[UBound] = actual;
  expectedvalues[UBound] = expect;
  UBound++;
}


function test()
{
  enterFunc('test');
  printBugNumber(BUGNUMBER);
  printStatus(summary);

  for (var i=0; i<UBound; i++)
  {
    reportCompare(expectedvalues[i], actualvalues[i], statusitems[i]);
  }

  exitFunc ('test');
}
