load("0d8683db8b3792521a65ad1edba9cf82.js");
load("dada5190587903f93a3604016a6099ce.js");
load("1237a76a3b369a9ccbdf1d1e9d4812e4.js");
load("762f4c20b6c2bf79dcf92be3017eef40.js");
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

gTestfile = 'proto_5.js';

/**
   File Name:          proto_5.js
   Section:
   Description:        Logical OR || in Constructors

   This tests Object Hierarchy and Inheritance, as described in the document
   Object Hierarchy and Inheritance in JavaScript, last modified on 12/18/97
   15:19:34 on http://devedge.netscape.com/.  Current URL:
   http://devedge.netscape.com/docs/manuals/communicator/jsobj/contents.htm

   This tests the syntax ObjectName.prototype = new PrototypeObject using the
   Employee example in the document referenced above.

   This tests the logical OR opererator || syntax in constructors.

   Author:             christine@netscape.com
   Date:               12 november 1997
*/

var SECTION = "proto_5";
var VERSION = "JS1_3";
var TITLE   = "Logical OR || in Constructors";

startTest();
writeHeaderToLog( SECTION + " "+ TITLE);

function Employee ( name, dept ) {
  this.name = name || "";
  this.dept = dept || "general";
}
function Manager () {
  this.reports = [];
}
Manager.prototype = new Employee();

function WorkerBee ( projs ) {
  this.projects = projs || new Array();
}
WorkerBee.prototype = new Employee();

function SalesPerson () {
  this.dept = "sales";
  this.quota = 100;
}
SalesPerson.prototype = new WorkerBee();

function Engineer ( machine ) {
  this.dept = "engineering";
  this.machine = machine || "";
}
Engineer.prototype = new WorkerBee();


var pat = new Engineer( "indy" );

var les = new Engineer();

new TestCase( SECTION,
	      "var pat = new Engineer(\"indy\"); pat.name",
	      "",
	      pat.name );

new TestCase( SECTION,
	      "pat.dept",
	      "engineering",
	      pat.dept );

new TestCase( SECTION,
	      "pat.projects.length",
	      0,
	      pat.projects.length );

new TestCase( SECTION,
	      "pat.machine",
	      "indy",
	      pat.machine );

new TestCase( SECTION,
	      "pat.__proto__ == Engineer.prototype",
	      true,
	      pat.__proto__ == Engineer.prototype );

new TestCase( SECTION,
	      "var les = new Engineer(); les.name",
	      "",
	      les.name );

new TestCase( SECTION,
	      "les.dept",
	      "engineering",
	      les.dept );

new TestCase( SECTION,
	      "les.projects.length",
	      0,
	      les.projects.length );

new TestCase( SECTION,
	      "les.machine",
	      "",
	      les.machine );

new TestCase( SECTION,
	      "les.__proto__ == Engineer.prototype",
	      true,
	      les.__proto__ == Engineer.prototype );


test();