load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("45e1d6de6cbdd6f2ea33d472d566096a.js");
/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

//-----------------------------------------------------------------------------
var BUGNUMBER = 332472;
var summary = 'new RegExp() ignores string boundaries when throwing exceptions';
var actual = '';
var expect = true;

printBugNumber(BUGNUMBER);
printStatus (summary);

var str1 = "?asdf\nAnd you really shouldn't see this!";
var str2 = str1.substr(0, 5);
try {
  new RegExp(str2);
}
catch(ex) {
  printStatus(ex);
  actual = ex instanceof SyntaxError;
}
 
reportCompare(expect, actual, summary);
