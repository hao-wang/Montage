load("0d8683db8b3792521a65ad1edba9cf82.js");
load("dada5190587903f93a3604016a6099ce.js");
load("e61db04c7f35aa37aeeb2dfa021f4d7c.js");
load("2a4e9c07523041fc4aaa975f3f4714f5.js");
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

gTestfile = '15.7.4.3-3-n.js';

/**
   File Name:          15.7.4.3-3.js
   ECMA Section:       15.7.4.3.1 Number.prototype.valueOf()
   Description:
   Returns this number value.

   The valueOf function is not generic; it generates a runtime error if its
   this value is not a Number object. Therefore it cannot be transferred to
   other kinds of objects for use as a method.

   Author:             christine@netscape.com
   Date:               16 september 1997
*/
var SECTION = "15.7.4.3-3-n";
var VERSION = "ECMA_1";
startTest();

writeHeaderToLog( SECTION + " Number.prototype.valueOf()");

//    new TestCase("15.7.4.1", "v = Number.prototype.valueOf; num = 3; num.valueOf = v; num.valueOf()", "error",  eval("v = Number.prototype.valueOf; num = 3; num.valueOf = v; num.valueOf()") );

DESCRIPTION = "v = Number.prototype.valueOf; o = new String('Infinity'); o.valueOf = v; o.valueOf()";
EXPECTED = "error";

new TestCase("15.7.4.1",
	     "v = Number.prototype.valueOf; o = new String('Infinity'); o.valueOf = v; o.valueOf()",
	     "error", 
	     eval("v = Number.prototype.valueOf; o = new String('Infinity'); o.valueOf = v; o.valueOf()") );

//    new TestCase("15.7.4.1", "v = Number.prototype.valueOf; o = new Object(); o.valueOf = v; o.valueOf()", "error",  eval("v = Number.prototype.valueOf; o = new Object(); o.valueOf = v; o.valueOf()") );

test();
