load("0d8683db8b3792521a65ad1edba9cf82.js");
load("dada5190587903f93a3604016a6099ce.js");
load("3c5963ebbdec4853c65f16970bfa9a36.js");
load("31a58575345927801eb58823ddd840ef.js");
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

gTestfile = 'regexparg-1.js';

/**
   File Name:          regexparg-1.js
   Description:

   Regression test for
   http://scopus/bugsplat/show_bug.cgi?id=122787
   Passing a regular expression as the first constructor argument fails

   Author:             christine@netscape.com
   Date:               15 June 1998
*/

var SECTION = "JS_1.2";
var VERSION = "JS_1.2";
startTest();
var TITLE   = "The variable statement";

writeHeaderToLog( SECTION + " "+ TITLE);

print("Note: Bug 61911 changed the behavior of typeof regexp in Gecko 1.9.");
print("Prior to Gecko 1.9, typeof regexp returned 'function'.");
print("However in Gecko 1.9 and later, typeof regexp will return 'object'.");

function f(x) {return x;}

x = f(/abc/);

new TestCase( SECTION,
	      "function f(x) {return x;}; f()",
	      void 0,
	      f() );

new TestCase( SECTION,
	      "f(\"hi\")",
	      "hi",
	      f("hi") );

new TestCase( SECTION,
	      "new f(/abc/) +''",
	      "/abc/",
	      new f(/abc/) +"" );

new TestCase( SECTION,
	      "f(/abc/)+'')",
	      "/abc/",
	      f(/abc/) +'');   
       
new TestCase( SECTION,
	      "typeof f(/abc/)",
	      "object",
	      typeof f(/abc/) );

new TestCase( SECTION,
	      "typeof new f(/abc/)",
	      "object",
	      typeof new f(/abc/) );

new TestCase( SECTION,
	      "x = new f(/abc/); x(\"hi\")",
	      null,
	      x("hi") );


// js> x()
test();