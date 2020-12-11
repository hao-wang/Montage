load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("e7298b87458610fb43224d2d0185d930.js");
/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

//-----------------------------------------------------------------------------
var BUGNUMBER = 341510;
var summary = 'Iterators: crash in close handler with assignment to ' +
  'nonexistent name';
var actual = 'No Crash';
var expect = 'No Crash';

printBugNumber(BUGNUMBER);
printStatus (summary);

function gen(i) {
  try {
    yield i;
  } finally {
    name_that_does_not_exist_in_the_scope_chain = 1;
  }
}

var iter = gen(1);
iter.next();
iter = null;
gc();

reportCompare(expect, actual, summary);