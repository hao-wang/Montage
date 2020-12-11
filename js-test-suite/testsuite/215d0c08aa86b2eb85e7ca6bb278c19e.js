load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("b838f1585aea1338f85dfef2026aaa95.js");
/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */


/**
   File Name:          number-002.js
   Corresponds To:     ecma/Number/15.7.4.3-2-n.js
   ECMA Section:       15.7.4.3.1 Number.prototype.valueOf()
   Description:
   Returns this number value.

   The valueOf function is not generic; it generates a runtime error if its
   this value is not a Number object. Therefore it cannot be transferred to
   other kinds of objects for use as a method.

   Author:             christine@netscape.com
   Date:               16 september 1997
*/
var SECTION = "number-002";
var VERSION = "JS1_4";
var TITLE   = "Exceptions for Number.valueOf()";

startTest();
writeHeaderToLog( SECTION + " Number.prototype.valueOf()");

var result = "Failed";
var exception = "No exception thrown";
var expect = "Passed";

try {
  object= new Object();
  object.toString = Number.prototype.valueOf;
  result = object.toString();
} catch ( e ) {
  result = expect;
  exception = e.toString();
}

new TestCase(
  SECTION,
  "object = new Object(); object.valueOf = Number.prototype.valueOf; object.valueOf()" +
  " (threw " + exception +")",
  expect,
  result );

test();
