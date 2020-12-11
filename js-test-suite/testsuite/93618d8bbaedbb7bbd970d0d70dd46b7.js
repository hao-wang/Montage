load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("74295afcbe3851329365d06de2aa5a5e.js");
/* -*- tab-width: 2; indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */


/**
   File Name:          15.1.2.5-2.js
   ECMA Section:       15.1.2.5  Function properties of the global object
   unescape( string )
   Description:

   This tests the cases where there are fewer than 4 characters following "%u",
   or fewer than 2 characters following "%" or "%u".

   The unescape function computes a new version of a string value in which
   each escape sequences of the sort that might be introduced by the escape
   function is replaced with the character that it represents.

   When the unescape function is called with one argument string, the
   following steps are taken:

   1.  Call ToString(string).
   2.  Compute the number of characters in Result(1).
   3.  Let R be the empty string.
   4.  Let k be 0.
   5.  If k equals Result(2), return R.
   6.  Let c be the character at position k within Result(1).
   7.  If c is not %, go to step 18.
   8.  If k is greater than Result(2)-6, go to step 14.
   9.  If the character at position k+1 within result(1) is not u, go to step
   14.
   10. If the four characters at positions k+2, k+3, k+4, and k+5 within
   Result(1) are not all hexadecimal digits, go to step 14.
   11. Let c be the character whose Unicode encoding is the integer represented
   by the four hexadecimal digits at positions k+2, k+3, k+4, and k+5
   within Result(1).
   12. Increase k by 5.
   13. Go to step 18.
   14. If k is greater than Result(2)-3, go to step 18.
   15. If the two characters at positions k+1 and k+2 within Result(1) are not
   both hexadecimal digits, go to step 18.
   16. Let c be the character whose Unicode encoding is the integer represented
   by two zeroes plus the two hexadecimal digits at positions k+1 and k+2
   within Result(1).
   17. Increase k by 2.
   18. Let R be a new string value computed by concatenating the previous value
   of R and c.
   19. Increase k by 1.
   20. Go to step 5.
   Author:             christine@netscape.com
   Date:               28 october 1997
*/

var SECTION = "15.1.2.5-2";
var VERSION = "ECMA_1";
startTest();
var TITLE   = "unescape(string)";

writeHeaderToLog( SECTION + " "+ TITLE);

// since there is only one character following "%", no conversion should occur.

for ( var CHARCODE = 0; CHARCODE < 256; CHARCODE += 16 ) {
  new TestCase( SECTION,
		"unescape( %"+ (ToHexString(CHARCODE)).substring(0,1) +" )",
		"%"+(ToHexString(CHARCODE)).substring(0,1),
		unescape( "%" + (ToHexString(CHARCODE)).substring(0,1) )  );
}

// since there is only one character following "%u", no conversion should occur.

for ( var CHARCODE = 0; CHARCODE < 256; CHARCODE +=16 ) {
  new TestCase( SECTION,
		"unescape( %u"+ (ToHexString(CHARCODE)).substring(0,1) +" )",
		"%u"+(ToHexString(CHARCODE)).substring(0,1),
		unescape( "%u" + (ToHexString(CHARCODE)).substring(0,1) )  );
}


// three char unicode string.  no conversion should occur

for ( var CHARCODE = 1024; CHARCODE < 65536; CHARCODE+= 1234 ) {
  new TestCase
    (   SECTION,
	"unescape( %u"+ (ToUnicodeString(CHARCODE)).substring(0,3)+ " )",

	"%u"+(ToUnicodeString(CHARCODE)).substring(0,3),
	unescape( "%u"+(ToUnicodeString(CHARCODE)).substring(0,3) )
      );
}

test();

function ToUnicodeString( n ) {
  var string = ToHexString(n);

  for ( var PAD = (4 - string.length ); PAD > 0; PAD-- ) {
    string = "0" + string;
  }

  return string;
}
function ToHexString( n ) {
  var hex = new Array();

  for ( var mag = 1; Math.pow(16,mag) <= n ; mag++ ) {
    ;
  }

  for ( index = 0, mag -= 1; mag > 0; index++, mag-- ) {
    hex[index] = Math.floor( n / Math.pow(16,mag) );
    n -= Math.pow(16,mag) * Math.floor( n/Math.pow(16,mag) );
  }

  hex[hex.length] = n % 16;

  var string ="";

  for ( var index = 0 ; index < hex.length ; index++ ) {
    switch ( hex[index] ) {
    case 10:
      string += "A";
      break;
    case 11:
      string += "B";
      break;
    case 12:
      string += "C";
      break;
    case 13:
      string += "D";
      break;
    case 14:
      string += "E";
      break;
    case 15:
      string += "F";
      break;
    default:
      string += hex[index];
    }
  }

  if ( string.length == 1 ) {
    string = "0" + string;
  }
  return string;
}
