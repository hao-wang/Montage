load("615498c4a0b6e677f08c0882a26c3e30.js");
/* The contents of this file are subject to the Netscape Public
 * License Version 1.1 (the "License"); you may not use this file
 * except in compliance with the License. You may obtain a copy of
 * the License at http://www.mozilla.org/NPL/
 *
 * Software distributed under the License is distributed on an "AS
 * IS" basis, WITHOUT WARRANTY OF ANY KIND, either express or
 * implied. See the License for the specific language governing
 * rights and limitations under the License.
 *
 * The Original Code is Mozilla Communicator client code, released March
 * 31, 1998.
 *
 * The Initial Developer of the Original Code is Netscape Communications
 * Corporation. Portions created by Netscape are
 * Copyright (C) 1998 Netscape Communications Corporation. All
 * Rights Reserved.
 *
 * Contributor(s): 
 * 
 */
/**
    File Name:          7.5-1.js
    ECMA Section:       7.5 Identifiers
    Description:        Identifiers are of unlimited length
                        - can contain letters, a decimal digit, _, or $
                        - the first character cannot be a decimal digit
                        - identifiers are case sensitive

    Author:             christine@netscape.com
    Date:               11 september 1997
*/
    var SECTION = "7.5-1";
    var VERSION = "ECMA_1";
    startTest();
    var TITLE   = "Identifiers";

    writeHeaderToLog( SECTION + " "+ TITLE);

    var testcases = getTestCases();
    test();

function getTestCases() {
    var array = new Array();
    var item = 0;

    array[item++] = new TestCase( SECTION,    "var $123 = 5",      5,       eval("var $123 = 5;$123") );
    array[item++] = new TestCase( SECTION,    "var _123 = 5",      5,       eval("var _123 = 5;_123") );

    return ( array );
}

function test() {
    for ( tc=0; tc < testcases.length; tc++ ) {
        testcases[tc].passed = writeTestCaseResult(
                            testcases[tc].expect,
                            testcases[tc].actual,
                            testcases[tc].description +":  "+
                            testcases[tc].actual );

        testcases[tc].reason += ( testcases[tc].passed ) ? "" : " ignored chars after line terminator of single-line comment";
    }
    stopTest();
    return ( testcases );
}
