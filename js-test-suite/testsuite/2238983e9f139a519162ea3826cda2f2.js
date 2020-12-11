load("0d8683db8b3792521a65ad1edba9cf82.js");
load("dada5190587903f93a3604016a6099ce.js");
load("e61db04c7f35aa37aeeb2dfa021f4d7c.js");
load("081fee6ebaffe3bf21b8245a5e67db7e.js");
/* -*- Mode: C++; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- */
/* ***** BEGIN LICENSE BLOCK *****
 * Version: MPL 1.1/GPL 2.0/LGPL 2.1
 *
 * The contents of this file are subject to the Mozilla Public License Version
 * 1.1 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 * http://www.mozilla.org/MPL/
 *
 * Software distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
 * for the specific language governing rights and limitations under the
 * License.
 *
 * The Original Code is Mozilla Communicator client code, released
 * March 31, 1998.
 *
 * The Initial Developer of the Original Code is
 * Netscape Communications Corporation.
 * Portions created by the Initial Developer are Copyright (C) 1998
 * the Initial Developer. All Rights Reserved.
 *
 * Contributor(s):
 *
 * Alternatively, the contents of this file may be used under the terms of
 * either the GNU General Public License Version 2 or later (the "GPL"), or
 * the GNU Lesser General Public License Version 2.1 or later (the "LGPL"),
 * in which case the provisions of the GPL or the LGPL are applicable instead
 * of those above. If you wish to allow use of your version of this file only
 * under the terms of either the GPL or the LGPL, and not to allow others to
 * use your version of this file under the terms of the MPL, indicate your
 * decision by deleting the provisions above and replace them with the notice
 * and other provisions required by the GPL or the LGPL. If you do not delete
 * the provisions above, a recipient may use your version of this file under
 * the terms of any one of the MPL, the GPL or the LGPL.
 *
 * ***** END LICENSE BLOCK ***** */

gTestfile = '15.9.5.7.js';

/**
   File Name:          15.9.5.7.js
   ECMA Section:       15.9.5.7
   Description:        Date.prototype.getUTCFullYear

   1.Let t be this time value.
   2.If t is NaN, return NaN.
   3.Return YearFromTime(t).
   Author:             christine@netscape.com
   Date:               12 november 1997
*/

var SECTION = "15.9.5.7";
var VERSION = "ECMA_1";
startTest();
var TITLE   = "Date.prototype.getUTCFullYear()";

writeHeaderToLog( SECTION + " "+ TITLE);

addTestCase( TIME_NOW );
addTestCase( TIME_0000 );
addTestCase( TIME_1970 );
addTestCase( TIME_1900 );
addTestCase( TIME_2000 );
addTestCase( UTC_FEB_29_2000 );
addTestCase( UTC_JAN_1_2005 );

new TestCase( SECTION,
	      "(new Date(NaN)).getUTCFullYear()",
	      NaN,
	      (new Date(NaN)).getUTCFullYear() );

new TestCase( SECTION,
	      "Date.prototype.getUTCFullYear.length",
	      0,
	      Date.prototype.getUTCFullYear.length );

test();

function addTestCase( t ) {
  new TestCase( SECTION,
		"(new Date("+t+")).getUTCFullYear()",
		YearFromTime(t),
		(new Date(t)).getUTCFullYear() );

  new TestCase( SECTION,
		"(new Date("+(t+1)+")).getUTCFullYear()",
		YearFromTime(t+1),
		(new Date(t+1)).getUTCFullYear() );

  new TestCase( SECTION,
		"(new Date("+(t-1)+")).getUTCFullYear()",
		YearFromTime(t-1),
		(new Date(t-1)).getUTCFullYear() );

  new TestCase( SECTION,
		"(new Date("+(t-TZ_ADJUST)+")).getUTCFullYear()",
		YearFromTime(t-TZ_ADJUST),
		(new Date(t-TZ_ADJUST)).getUTCFullYear() );

  new TestCase( SECTION,
		"(new Date("+(t+TZ_ADJUST)+")).getUTCFullYear()",
		YearFromTime(t+TZ_ADJUST),
		(new Date(t+TZ_ADJUST)).getUTCFullYear() );
}