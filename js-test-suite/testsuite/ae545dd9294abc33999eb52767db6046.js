load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("74295afcbe3851329365d06de2aa5a5e.js");
load("65e8e26820ba9a26bd71129e09aa83c5.js");
// |reftest| skip-if(!xulRuntime.shell&&xulRuntime.OS=="Linux"&&xulRuntime.XPCOMABI.match(/x86_64/)) -- bug xxx crash
/* -*- Mode: C++; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */


/**
   File Name:          15.9.5.12.js
   ECMA Section:       15.9.5.12
   Description:        Date.prototype.getDay


   1.   Let t be this time value.
   2.   If t is NaN, return NaN.
   3.   Return WeekDay(LocalTime(t)).

   Author:             christine@netscape.com
   Date:               12 november 1997
*/

var SECTION = "15.9.5.12";
var VERSION = "ECMA_1";
startTest();
var TITLE   = "Date.prototype.getDay()";

writeHeaderToLog( SECTION + " "+ TITLE);

addTestCase( TIME_0000 );

test();

function addTestCase( t ) {
  var start = TimeFromYear(YearFromTime(t));
  var stop  = TimeFromYear(YearFromTime(t) + 1);

  for (var d = start; d < stop; d += msPerDay)
  {
    new TestCase( SECTION,
                  "(new Date("+d+")).getDay()",
                  WeekDay((LocalTime(d))),
                  (new Date(d)).getDay() );
  }
}
