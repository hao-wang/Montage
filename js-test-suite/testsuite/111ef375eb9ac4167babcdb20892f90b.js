load("0d8683db8b3792521a65ad1edba9cf82.js");
load("dada5190587903f93a3604016a6099ce.js");
load("60699afe5b794b4c3e7c5edd87eb4d83.js");
load("e831d11f90f552dbf6318ae852ceea1a.js");
/* -*- Mode: java; tab-width: 8; indent-tabs-mode: nil; c-basic-offset: 4 -*- */
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

gTestfile = 'regress-313952-02.js';

var summary = "13.3.5.2 - root QName.uri";
var BUGNUMBER = 313952;
var actual = '';
var expect = '';

printBugNumber(BUGNUMBER);
START(summary);

var str = String(1);
var expected = String(1);

var x = new XML("text");

x.function::toString = function() {
        var tmp = str;
        str = null;
        return tmp;
}

var TWO = 2.0;

var likeString = {
        toString: function() {
                var tmp = new XML("");
                tmp = (tmp == "string");
                if (typeof gc == "function")
                        gc();
                for (var i = 0; i != 40000; ++i) {
                        tmp = 1e100 * TWO;
                        tmp = null;
                }
                return expected;
        }
}

TEST(1, true, x == likeString);

END();
