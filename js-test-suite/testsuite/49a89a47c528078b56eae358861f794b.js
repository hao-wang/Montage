load("0d8683db8b3792521a65ad1edba9cf82.js");
load("dada5190587903f93a3604016a6099ce.js");
load("0d37710bbdb078b0e44f1a8507bde9f1.js");
load("2c943740d1939ef7c5c16a76284aa10d.js");
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

gTestfile = 'boolean-004.js';

/**
   File Name:      boolean-004.js
   Description:

   A java.lang.Boolean object should be read as a JavaScript JavaObject.
   To test this:

   1.  The object should have a method called booleanValue(), which should
   return the object's value.
   2.  The typeof the object should be "object"
   3.  The object should have a method called getClass(), which should
   return the class java.lang.Boolean.
   4.  Add a method to the object's prototype, called getJSClass() that
   is Object.prototype.toString.  Calling getJSClass() should return the
   object's internal [[Class]] property, which should be JavaObject.

   @author     christine@netscape.com
   @version    1.00
*/
var SECTION = "LiveConnect";
var VERSION = "1_3";
var TITLE   = "Java Boolean Object to JavaScript Object";

startTest();
writeHeaderToLog( SECTION + " "+ TITLE);

//  In all test cases, the expected type is "object"

var E_TYPE = "object";

//  ToString of a JavaObject should return "[object JavaObject]"

var E_JSCLASS = "[object JavaObject]";

//  The class of this object is java.lang.Boolean.

var E_JAVACLASS = java.lang.Class.forName( "java.lang.Boolean" );

//  Create arrays of actual results (java_array) and expected results
//  (test_array).

var java_array = new Array();
var test_array = new Array();

var i = 0;

//  Instantiate a new java.lang.Boolean object whose value is Boolean.TRUE
java_array[i] = new JavaValue(  new java.lang.Boolean( true )  );
test_array[i] = new TestValue(  "new java.lang.Boolean( true )",
				true );

i++;

//  Instantiate a new java.lang.Boolean object whose value is Boolean.FALSE
java_array[i] = new JavaValue(  new java.lang.Boolean( true )  );
test_array[i] = new TestValue(  "new java.lang.Boolean( true )",
				true );

i++;

for ( i = 0; i < java_array.length; i++ ) {
  CompareValues( java_array[i], test_array[i] );

}

test();

function CompareValues( javaval, testval ) {
  //  Check value
  new TestCase( SECTION,
		"("+testval.description+").booleanValue()",
		testval.value,
		javaval.value );
  //  Check type, which should be E_TYPE
  new TestCase( SECTION,
		"typeof (" + testval.description +")",
		testval.type,
		javaval.type );
/*
//  Check JavaScript class, which should be E_JSCLASS
new TestCase( SECTION,
"(" + testval.description +").getJSClass()",
testval.jsclass,
javaval.jsclass );
*/
  //  Check Java class, which should equal() E_JAVACLASS
  new TestCase( SECTION,
		"(" + testval.description +").getClass().equals( " + E_JAVACLASS +" )",
		true,
		javaval.javaclass.equals( testval.javaclass ) );
}
function JavaValue( value ) {
  //  java.lang.Object.getClass() returns the Java Object's class.
  this.javaclass = value.getClass();

  // Object.prototype.toString will show its JavaScript wrapper object.
//    value.__proto__.getJSClass = Object.prototype.toString;
//    this.jsclass = value.getJSClass();

  this.value  = value.booleanValue();
  this.type   = typeof value;
  return this;
}
function TestValue( description, value ) {
  this.description = description;
  this.value = value;
  this.type =  E_TYPE;
  this.javaclass = E_JAVACLASS;
  this.jsclass = E_JSCLASS;
  return this;
}
