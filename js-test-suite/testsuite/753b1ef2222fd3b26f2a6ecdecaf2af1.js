load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("74295afcbe3851329365d06de2aa5a5e.js");
load("65e8e26820ba9a26bd71129e09aa83c5.js");
/* -*- tab-width: 2; indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */


/**
   File Name:          15.9.3.8.js
   ECMA Section:       15.9.3.8 The Date Constructor
   new Date( value )
   Description:        The [[Prototype]] property of the newly constructed
   object is set to the original Date prototype object,
   the one that is the initial valiue of Date.prototype.

   The [[Class]] property of the newly constructed object is
   set to "Date".

   The [[Value]] property of the newly constructed object is
   set as follows:

   1. Call ToPrimitive(value)
   2. If Type( Result(1) ) is String, then go to step 5.
   3. Let V be  ToNumber( Result(1) ).
   4. Set the [[Value]] property of the newly constructed
   object to TimeClip(V) and return.
   5. Parse Result(1) as a date, in exactly the same manner
   as for the parse method.  Let V be the time value for
   this date.
   6. Go to step 4.

   Author:             christine@netscape.com
   Date:               28 october 1997
   Version:            9706

*/

var VERSION = "ECMA_1";
startTest();
var SECTION = "15.9.3.8";
var TYPEOF  = "object";

var TIME        = 0;
var UTC_YEAR    = 1;
var UTC_MONTH   = 2;
var UTC_DATE    = 3;
var UTC_DAY     = 4;
var UTC_HOURS   = 5;
var UTC_MINUTES = 6;
var UTC_SECONDS = 7;
var UTC_MS      = 8;

var YEAR        = 9;
var MONTH       = 10;
var DATE        = 11;
var DAY         = 12;
var HOURS       = 13;
var MINUTES     = 14;
var SECONDS     = 15;
var MS          = 16;


//  for TCMS, the gTestcases array must be global.
var gTc= 0;
var TITLE = "Date constructor:  new Date( value )";
var SECTION = "15.9.3.8";
var VERSION = "ECMA_1";
startTest();

writeHeaderToLog( SECTION +" " + TITLE );

// all the "ResultArrays" below are hard-coded to Pacific Standard Time values -
var TZ_ADJUST =  -TZ_PST * msPerHour;

// Dates around Feb 29, 2000

var PST_FEB_29_2000 = UTC_FEB_29_2000 + TZ_ADJUST;

addNewTestCase( new Date(UTC_FEB_29_2000),
		"new Date("+UTC_FEB_29_2000+")",
		[UTC_FEB_29_2000,2000,1,29,2,0,0,0,0,2000,1,28,1,16,0,0,0] );

addNewTestCase( new Date(PST_FEB_29_2000),
		"new Date("+PST_FEB_29_2000+")",
		[PST_FEB_29_2000,2000,1,29,2,8,0,0,0,2000,1,29,2,0,0,0,0] );

addNewTestCase( new Date( (new Date(UTC_FEB_29_2000)).toString() ),
		"new Date(\""+(new Date(UTC_FEB_29_2000)).toString()+"\")",
		[UTC_FEB_29_2000,2000,1,29,2,0,0,0,0,2000,1,28,1,16,0,0,0] );

addNewTestCase( new Date( (new Date(PST_FEB_29_2000)).toString() ),
		"new Date(\""+(new Date(PST_FEB_29_2000)).toString()+"\")",
		[PST_FEB_29_2000,2000,1,29,2,8,0,0,0,2000,1,29,2,0,0,0,0] );


addNewTestCase( new Date( (new Date(UTC_FEB_29_2000)).toGMTString() ),
		"new Date(\""+(new Date(UTC_FEB_29_2000)).toGMTString()+"\")",
		[UTC_FEB_29_2000,2000,1,29,2,0,0,0,0,2000,1,28,1,16,0,0,0] );

addNewTestCase( new Date( (new Date(PST_FEB_29_2000)).toGMTString() ),
		"new Date(\""+(new Date(PST_FEB_29_2000)).toGMTString()+"\")",
		[PST_FEB_29_2000,2000,1,29,2,8,0,0,0,2000,1,29,2,0,0,0,0] );

test();

function addNewTestCase( DateCase, DateString, ResultArray ) {
  //adjust hard-coded ResultArray for tester's timezone instead of PST
  adjustResultArray(ResultArray, 'msMode');

  new TestCase( SECTION, DateString+".getTime()", ResultArray[TIME],       DateCase.getTime() );
  new TestCase( SECTION, DateString+".valueOf()", ResultArray[TIME],       DateCase.valueOf() );
  new TestCase( SECTION, DateString+".getUTCFullYear()",      ResultArray[UTC_YEAR], DateCase.getUTCFullYear() );
  new TestCase( SECTION, DateString+".getUTCMonth()",         ResultArray[UTC_MONTH],  DateCase.getUTCMonth() );
  new TestCase( SECTION, DateString+".getUTCDate()",          ResultArray[UTC_DATE],   DateCase.getUTCDate() );
  new TestCase( SECTION, DateString+".getUTCDay()",           ResultArray[UTC_DAY],    DateCase.getUTCDay() );
  new TestCase( SECTION, DateString+".getUTCHours()",         ResultArray[UTC_HOURS],  DateCase.getUTCHours() );
  new TestCase( SECTION, DateString+".getUTCMinutes()",       ResultArray[UTC_MINUTES],DateCase.getUTCMinutes() );
  new TestCase( SECTION, DateString+".getUTCSeconds()",       ResultArray[UTC_SECONDS],DateCase.getUTCSeconds() );
  new TestCase( SECTION, DateString+".getUTCMilliseconds()",  ResultArray[UTC_MS],     DateCase.getUTCMilliseconds() );
  new TestCase( SECTION, DateString+".getFullYear()",         ResultArray[YEAR],       DateCase.getFullYear() );
  new TestCase( SECTION, DateString+".getMonth()",            ResultArray[MONTH],      DateCase.getMonth() );
  new TestCase( SECTION, DateString+".getDate()",             ResultArray[DATE],       DateCase.getDate() );
  new TestCase( SECTION, DateString+".getDay()",              ResultArray[DAY],        DateCase.getDay() );
  new TestCase( SECTION, DateString+".getHours()",            ResultArray[HOURS],      DateCase.getHours() );
  new TestCase( SECTION, DateString+".getMinutes()",          ResultArray[MINUTES],    DateCase.getMinutes() );
  new TestCase( SECTION, DateString+".getSeconds()",          ResultArray[SECONDS],    DateCase.getSeconds() );
  new TestCase( SECTION, DateString+".getMilliseconds()",     ResultArray[MS],         DateCase.getMilliseconds() );
}
