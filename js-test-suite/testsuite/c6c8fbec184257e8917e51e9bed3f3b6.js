load("8b38e12cab5de21ec5393724c0d9b7dd.js");
//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// !!!! DO NOT EDIT THIS FILE WITH A NORMAL TEXT EDITOR !!!

// This file contains invalid UTF8 sequences that any sane editor would "fix".
// but would, however break this test. If you do edit it then make sure the invalid
// sequences are retained in the edited file before checking in.

function write(a) {
    if (this.WScript == undefined) {
        document.write(a);
        document.write("</br>");
    }
    else
        WScript.Echo(a)
}

function test(a, b) {
  write(a == b);
  var evalText = "result = \"" + a + "\"";
  eval(evalText);
  write(a == result);
}
  
// String containing invalid sequence C0 20 should be equivient to \uFFFD\u00020"
var C020 = "À ";
var Rep20 = "\uFFFD\u0020";
test(C020, Rep20);

// Ensure a valid sequence gets translated correctly.
var C885 = "È";
var x0205 = "\u0205";
test(C885, x0205);

// Ensure surrogate pairs are encoded correctly
var F0909080 = "ð";
var D801DC00 = "\uD801\uDC00";
test(F0909080, D801DC00);

// Ensure invalid surrogate pairs are replaced with replacement characters.
var EDA081_EDB080 = "í í°";
var Repx6 = "\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD";
test(EDA081_EDB080, Repx6);

// Ensure invalid characters are not replaced with replacement characters.
var EFBFBF = "ï¿¿";
var Repx7 = "\uFFFF";
test(EFBFBF, Repx7);
