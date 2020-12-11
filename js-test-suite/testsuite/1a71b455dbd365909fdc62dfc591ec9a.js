load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("74295afcbe3851329365d06de2aa5a5e.js");
/* -*- tab-width: 2; indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */


/**
   File Name:          12.7-1-n.js
   ECMA Section:       12.7 The continue statement
   Description:

   Author:             christine@netscape.com
   Date:               12 november 1997
*/
var SECTION = "12.7.1-n";
var VERSION = "ECMA_1";
startTest();
var TITLE   = "The continue statement";

writeHeaderToLog( SECTION + " "+ TITLE);

DESCRIPTION = "continue";
EXPECTED = "error";

new TestCase(   SECTION,
		"continue",
		"error",
		eval("continue") );

test();
