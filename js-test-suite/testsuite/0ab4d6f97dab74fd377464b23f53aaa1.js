load("0d8683db8b3792521a65ad1edba9cf82.js");
load("dada5190587903f93a3604016a6099ce.js");
load("01e0ec3a9a01836764c05319def52ae3.js");
load("e831d11f90f552dbf6318ae852ceea1a.js");
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
 * Portions created by the Initial Developer are Copyright (C) 2005
 * the Initial Developer. All Rights Reserved.
 *
 * Contributor(s): Igor Bukanov
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

var gTestfile = 'regress-311497.js';
//-----------------------------------------------------------------------------
var BUGNUMBER = 311497;
var summary = 'Root pivots in js_HeapSort';
var actual = 'No Crash';
var expect = 'No Crash';

printBugNumber(BUGNUMBER);
printStatus (summary);


function force_gc()
{
  if (this.gc) gc();
  for (var i = 0; i != 30000; ++i) {
    var tmp = Math.sin(i);
    tmp = null;
  }
}

var array = new Array(10);
for (var i = 0; i != array.length; ++i) {
  array[i] = String.fromCharCode(i, i, i);
}

function cmp(a, b)
{
  for (var i = 0; i != array.length; ++i) {
    array[i] = null;
  }
  force_gc();
  return 0;
}

array.sort(cmp);

// Verify that array contains either null or original strings

var null_count = 0;
var original_string_count = 0;
for (var i = 0; i != array.length; ++i) {
  var elem = array[i];
  if (elem === null) {
    ++null_count;
  } else if (typeof elem == "string" && elem.length == 3) {
    var code = elem.charCodeAt(0);
    if (0 <= code && code < array.length) {
      if (code === elem.charCodeAt(1) && code == elem.charCodeAt(2))
	++original_string_count;
    }
  }
}

var expect = array.length;
var actual = null_count + original_string_count;

reportCompare(expect, actual, summary);