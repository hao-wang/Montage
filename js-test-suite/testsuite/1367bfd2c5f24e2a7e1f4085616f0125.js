load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("b838f1585aea1338f85dfef2026aaa95.js");
/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */


/**
   File Name:          statement-007.js
   Corresponds To:     12.7-1-n.js
   ECMA Section:       12.7 The continue statement
   Description:

   Author:             christine@netscape.com
   Date:               12 november 1997
*/
var SECTION = "statement-007";
var VERSION = "JS1_4";
var TITLE   = "The continue statement";

startTest();
writeHeaderToLog( SECTION + " "+ TITLE);

var result = "Failed";
var exception = "No exception thrown";
var expect = "Passed";

try {
  eval("continue;");
} catch ( e ) {
  result = expect;
  exception = e.toString();
}

new TestCase(
  SECTION,
  "continue outside of an iteration statement" +
  " (threw " + exception +")",
  expect,
  result );

test();

