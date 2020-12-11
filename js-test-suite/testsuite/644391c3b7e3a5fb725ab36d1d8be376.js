load("0d8683db8b3792521a65ad1edba9cf82.js");
load("dada5190587903f93a3604016a6099ce.js");
load("3c5963ebbdec4853c65f16970bfa9a36.js");
load("30cbef1ae16b9254c6014e1697c80b8c.js");
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

gTestfile = 'toString-001.js';

/**
   File Name:          toString_1.js
   ECMA Section:       Object.toString()
   Description:

   This checks the ToString value of Object objects under JavaScript 1.2.

   In JavaScript 1.2, Object.toString()

   Author:             christine@netscape.com
   Date:               12 november 1997
*/

var SECTION = "JS1_2";
var VERSION = "JS1_2";
startTest();
var TITLE   = "Object.toString()";

writeHeaderToLog( SECTION + " "+ TITLE);

var o = new Object();

new TestCase( SECTION,
	      "var o = new Object(); o.toString()",
	      "{}",
	      o.toString() );

o = {};

new TestCase( SECTION,
	      "o = {}; o.toString()",
	      "{}",
	      o.toString() );

o = { name:"object", length:0, value:"hello" }

  new TestCase( SECTION,
		"o = { name:\"object\", length:0, value:\"hello\" }; o.toString()",
		true,
		checkObjectToString(o.toString(), ['name:"object"', 'length:0',
						   'value:"hello"']));

o = { name:"object", length:0, value:"hello",
      toString:new Function( "return this.value+''" ) }

  new TestCase( SECTION,
		"o = { name:\"object\", length:0, value:\"hello\", "+
		"toString:new Function( \"return this.value+''\" ) }; o.toString()",
		"hello",
		o.toString() );



test();

/**
 * checkObjectToString
 *
 * In JS1.2, Object.prototype.toString returns a representation of the
 * object's properties as a string. However, the order of the properties
 * in the resulting string is not specified. This function compares the
 * resulting string with an array of strings to make sure that the
 * resulting string is some permutation of the strings in the array.
 */
function checkObjectToString(s, a) {
  var m = /^\{(.*)\}$/(s);
  if (!m)
    return false;	// should begin and end with curly brackets
  var a2 = m[1].split(", ");
  if (a.length != a2.length)
    return false;	// should be same length
  a.sort();
  a2.sort();
  for (var i=0; i < a.length; i++) {
    if (a[i] != a2[i])
      return false;	// should have identical elements
  }
  return true;
}
