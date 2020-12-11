load("fcfbc86708bc3a4062c2091a062e13b6.js");
/* -*- tab-width: 2; indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */


/**
   Filename:     endLine.js
   Description:  'Tests regular expressions containing $'

   Author:       Nick Lerissa
   Date:         March 10, 1998
*/

var SECTION = 'As described in Netscape doc "Whats new in JavaScript 1.2"';
var VERSION = 'no version';
startTest();
var TITLE   = 'RegExp: $';

writeHeaderToLog('Executing script: endLine.js');
writeHeaderToLog( SECTION + " "+ TITLE);


// 'abcde'.match(new RegExp('de$'))
new TestCase ( SECTION, "'abcde'.match(new RegExp('de$'))",
	       String(["de"]), String('abcde'.match(new RegExp('de$'))));

// 'ab\ncde'.match(new RegExp('..$e$'))
new TestCase ( SECTION, "'ab\ncde'.match(new RegExp('..$e$'))",
	       null, 'ab\ncde'.match(new RegExp('..$e$')));

// 'yyyyy'.match(new RegExp('xxx$'))
new TestCase ( SECTION, "'yyyyy'.match(new RegExp('xxx$'))",
	       null, 'yyyyy'.match(new RegExp('xxx$')));

// 'a$$$'.match(new RegExp('\\$+$'))
new TestCase ( SECTION, "'a$$$'.match(new RegExp('\\$+$'))",
	       String(['$$$']), String('a$$$'.match(new RegExp('\\$+$'))));

// 'a$$$'.match(/\$+$/)
new TestCase ( SECTION, "'a$$$'.match(/\\$+$/)",
	       String(['$$$']), String('a$$$'.match(/\$+$/)));

test();
