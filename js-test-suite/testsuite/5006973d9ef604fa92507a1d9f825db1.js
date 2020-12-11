load("0d8683db8b3792521a65ad1edba9cf82.js");
load("dada5190587903f93a3604016a6099ce.js");
load("01e0ec3a9a01836764c05319def52ae3.js");
load("e76ff365d64777bcbc1bae1e7cf335bc.js");
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
 * The Original Code is JavaScript Engine testing utilities.
 *
 * The Initial Developer of the Original Code is
 * Mozilla Foundation.
 * Portions created by the Initial Developer are Copyright (C) 2007
 * the Initial Developer. All Rights Reserved.
 *
 * Contributor(s): Jesse Ruderman
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

var gTestfile = 'regress-418540.js';
//-----------------------------------------------------------------------------
var BUGNUMBER = 418540;
var summary = 'Do not assert: OBJ_IS_NATIVE(obj)';
var actual = 'No Crash';
var expect = 'No Crash';


//-----------------------------------------------------------------------------
test();
//-----------------------------------------------------------------------------

function test()
{
  enterFunc ('test');
  printBugNumber(BUGNUMBER);
  printStatus (summary);

  if (typeof window == 'undefined')
  {
    expect = actual = 'Browser test only - skipped';
    reportCompare(expect, actual, summary);
  }
  else
  {
    gDelayTestDriverEnd = true;
    window.onload = boom;
  }

  exitFunc ('test');
}

function boom()
{
  var p;
  var b = document.createElement("body");
  var v = document.createElement("div");
  b.getAttribute("id")
  v.getAttribute("id")
  for (p in v) { }
  for (p in b) { }
  b.__proto__ = [];
  try { aC(v, null); } catch(e) { }
  try { aC(b, null); } catch(e) { }

  setTimeout(check, 1000);
}

function aC(r, n) { r.appendChild(n); }

function check()
{
  expect = actual = 'No Crash';
  gDelayTestDriverEnd = false;
  reportCompare(expect, actual, summary);
  jsTestDriverEnd();
}
