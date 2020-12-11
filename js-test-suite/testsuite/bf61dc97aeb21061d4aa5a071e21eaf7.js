load("8b38e12cab5de21ec5393724c0d9b7dd.js");
//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

WScript.Echo("\uFEFFabc".trim());
WScript.Echo("abc\u0009".trim());
WScript.Echo("abc\u000B".trim());
WScript.Echo("abc\u000C".trim());
WScript.Echo("abc\u0020".trim());
WScript.Echo("abc\u00A0".trim());
WScript.Echo("abc\uFFFF".trim() == "abc\uFFFF");
WScript.Echo("\u0009abc\u0009".trim());
WScript.Echo(" \u0009abc \u0009".trim());
WScript.Echo("\u000Babc\u000B".trim());
WScript.Echo("\u000Cabc\u000C".trim());
WScript.Echo("\u0020abc\u0020".trim());
WScript.Echo("\u00A0abc\u00A0".trim());
WScript.Echo("\uFEFFabc\uFEFF".trim());
WScript.Echo("\u0009\u0009".trim() == "");
WScript.Echo("\u000B\u000B".trim() == "");
WScript.Echo("\u000C\u000C".trim() == "");
WScript.Echo("\u0009abc".trim());
WScript.Echo("\u0020\u0020".trim() == "");
WScript.Echo("\u00A0\u00A0".trim() == "");
WScript.Echo("\uFEFF\uFEFF".trim() == "");
WScript.Echo("ab\u0009c".trim());
WScript.Echo("ab\u000Bc".trim());
WScript.Echo("ab\u000Cc".trim());
WScript.Echo("ab\u0020c".trim());
WScript.Echo("ab\u0085c".trim() == "ab\u0085c");
WScript.Echo("\u000Babc".trim());
WScript.Echo("ab\u00A0c".trim() == "ab\u00A0c");
WScript.Echo("ab\u200Bc".trim() == "ab\u200Bc");
WScript.Echo("ab\uFEFFc".trim() == "ab\uFEFFc");
WScript.Echo("\u000Aabc".trim());
WScript.Echo("\u000Dabc".trim());
WScript.Echo("\u2028abc".trim());
WScript.Echo("\u2029abc".trim());
WScript.Echo("abc\u000A".trim());
WScript.Echo("abc\u000D".trim());
WScript.Echo("abc\u2028".trim());
WScript.Echo("\u000Cabc".trim());
WScript.Echo("abc\u2029".trim());
WScript.Echo("\u000Aabc\u000A".trim());
WScript.Echo("\u000Dabc\u000D".trim());
WScript.Echo("\u2028abc\u2028".trim());
WScript.Echo("\u2029abc\u2029".trim());
WScript.Echo("\u000A\u000A".trim() == "");
WScript.Echo("\u2028\u2028".trim() == "");
WScript.Echo("\u000D\u000D".trim() == "");
WScript.Echo("\u2029abc as a multiline string".trim());
WScript.Echo("\u0020abc".trim());
WScript.Echo("             ".trim() == "");
WScript.Echo("\u00A0abc".trim());


WScript.Echo("\uFEFFabc".trimLeft());
WScript.Echo("abc\u0009".trimRight());
WScript.Echo("abc\u000B".trimRight());
WScript.Echo("abc\u000C".trimRight());
WScript.Echo("abc\u0020".trimRight());
WScript.Echo("abc\u00A0".trimRight());
WScript.Echo("abc\uFFFF".trimRight() == "abc\uFFFF");
WScript.Echo("\u0009\u0009".trimLeft() == "");
WScript.Echo("\u0009\u0009".trimRight() == "");
WScript.Echo("\u000B\u000B".trimLeft() == "");
WScript.Echo("\u000C\u000C".trimLeft() == "");
WScript.Echo("\u000B\u000B".trimRight() == "");
WScript.Echo("\u000C\u000C".trimRight() == "");
WScript.Echo("\u0009abc".trimLeft());
WScript.Echo("\u0020\u0020".trimRight() == "");
WScript.Echo("\u00A0\u00A0".trimRight() == "");
WScript.Echo("\uFEFF\uFEFF".trimRight() == "");
WScript.Echo("ab\u0009c".trimRight());
WScript.Echo("ab\u000Bc".trimRight());
WScript.Echo("ab\u000Cc".trimRight());
WScript.Echo("ab\u0020c".trimRight());
WScript.Echo("ab\u0085c".trimRight() == "ab\u0085c");
WScript.Echo("\u000Babc".trimLeft());
WScript.Echo("ab\u00A0c".trimRight() == "ab\u00A0c");
WScript.Echo("ab\u200Bc".trimRight() == "ab\u200Bc");
WScript.Echo("ab\uFEFFc".trimLeft() == "ab\uFEFFc");
WScript.Echo("\u000Aabc".trimLeft());
WScript.Echo("\u000Dabc".trimLeft());
WScript.Echo("\u2028abc".trimLeft());
WScript.Echo("\u2029abc".trimLeft());
WScript.Echo("abc\u000A".trimRight());
WScript.Echo("abc\u000D".trimRight());
WScript.Echo("a\u2028".trimRight());
WScript.Echo("\u000Cabc".trimLeft());
WScript.Echo("abc\u2029".trimRight());
WScript.Echo("\u000A\u000A".trimRight() == "");
WScript.Echo("\u2028\u2028".trimLeft() == "");
WScript.Echo("\u000D\u000D".trimRight() == "");
WScript.Echo("\u2029abc as a multiline string".trimLeft());
WScript.Echo("\u0020abc".trimLeft());
WScript.Echo("             ".trimRight() == "");
WScript.Echo("\u00A0abc".trimLeft());
//implicit calls
var a = 1;
var b = 2;
var obj = {toString: function(){ a=3; return "Hello World";}};
a = b;
Object.prototype.split = String.prototype.split;
var f = obj.split();
WScript.Echo (a);
