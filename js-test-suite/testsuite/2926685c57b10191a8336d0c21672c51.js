load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("45e1d6de6cbdd6f2ea33d472d566096a.js");
/* -*- tab-width: 2; indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

//-----------------------------------------------------------------------------
var BUGNUMBER = 167658;
var summary = 'Do not crash due to js_NewRegExp initialization';
var actual = 'No Crash';
var expect = 'No Crash';
printBugNumber(BUGNUMBER);
printStatus (summary);

var UBOUND=100;
for (var j=0; j<UBOUND; j++)
{
  'Apfelkiste, Apfelschale'.replace('Apfel', function()
				    {
				      for (var i = 0; i < arguments.length; i++)
					printStatus(i+': '+arguments[i]);
				      return 'Bananen';
				    });

  printStatus(j);
}
 
reportCompare(expect, actual, summary);

