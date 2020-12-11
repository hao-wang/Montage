load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: URI tests
es5id: 15.1.3.2_A4_T4
description: Test some url
---*/

//CHECK#1
if (decodeURIComponent("") !== "") {
  $ERROR('#1: ""');
}

//CHECK#2
if (decodeURIComponent("http://unipro.ru") !== "http://unipro.ru") {
  $ERROR('#2: http://unipro.ru');
}

//CHECK#3
if (decodeURIComponent("http:%2f%2Fwww.google.ru/support/jobs/bin/static.py%3Fpage%3dwhy-ru.html%26sid%3Dliveandwork") !== "http://www.google.ru/support/jobs/bin/static.py?page=why-ru.html&sid=liveandwork") {
  $ERROR('#3: http:%2f%2Fwww.google.ru/support/jobs/bin/static.py%3Fpage3dwhy-ru.html%26sid3Dliveandwork"');
}           

//CHECK#4
if (decodeURIComponent("http:%2F%2Fen.wikipedia.org/wiki/UTF-8%23Description") !== "http://en.wikipedia.org/wiki/UTF-8#Description") {
  $ERROR('#4: http:%2F%2Fen.wikipedia.org/wiki/UTF-8%23Description');
}