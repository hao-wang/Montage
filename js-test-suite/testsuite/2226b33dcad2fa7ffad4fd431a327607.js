load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("67475d6f299e80572167f8e325dacbed.js");
// Copyright 2016 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
esid: sec-intl.getcanonicallocales
description: Tests the getCanonicalLocales function for error tags.
info: |
  8.2.1 Intl.getCanonicalLocales (locales)
  1. Let ll be ? CanonicalizeLocaleList(locales).
  2. Return CreateArrayFromList(ll).
includes: [compareArray.js]
features: [Symbol]
---*/

var rangeErrorCases =
  [
   "en-us-",
   "-en-us",
   "en-us-en-us",
   "--",
   "-",
   "",
   "-e-"
  ];

rangeErrorCases.forEach(function(re) {
  assert.throws(RangeError, function() {
    Intl.getCanonicalLocales(re);
  });
});

var typeErrorCases =
  [
    null,
    [null],
    [true],
    [NaN],
    [2],
    [Symbol('foo')]
  ];

typeErrorCases.forEach(function(te) {
  assert.throws(TypeError, function() {
    Intl.getCanonicalLocales(te);
  });
});
