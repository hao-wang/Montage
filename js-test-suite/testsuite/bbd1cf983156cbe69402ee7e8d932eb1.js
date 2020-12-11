load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("45e1d6de6cbdd6f2ea33d472d566096a.js");
/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

//-----------------------------------------------------------------------------
var BUGNUMBER = 372309;
var summary = 'Root new array objects';
var actual = 'No Crash';
var expect = 'No Crash';

function test()
{
  enterFunc ('test');
  printBugNumber(BUGNUMBER);
  printStatus (summary);

  var width = 600;
  var height = 600;

  var img1canvas = document.createElement("canvas");
  var img2canvas = document.createElement("canvas");

  img1canvas.width = img2canvas.width = width;
  img1canvas.height = img2canvas.height = height;
  img1canvas.getContext("2d").getImageData(0, 0, width, height).data;
  img2canvas.getContext("2d").getImageData(0, 0, width, height).data;
 
  reportCompare(expect, actual, summary);
  gDelayTestDriverEnd = false;
  jsTestDriverEnd();

  exitFunc ('test');
}

if (typeof window != 'undefined')
{
  // delay test driver end
  gDelayTestDriverEnd = true;

  window.addEventListener("load", test, false);
}
else
{
  reportCompare(expect, actual, summary);
}

