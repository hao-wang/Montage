load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("a78642394624b473718326d9a37d69a7.js");
// Copyright 2012 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 9.1_a
description: Tests that default locale is available.
author: Norbert Lindenberg
includes: [testIntl.js]
---*/

testWithIntlConstructors(function (Constructor) {
    var defaultLocale = new Constructor().resolvedOptions().locale;
    var supportedLocales = Constructor.supportedLocalesOf([defaultLocale]);
    if (supportedLocales.indexOf(defaultLocale) === -1) {
        $ERROR("Default locale is not reported as available.");
    }
});
