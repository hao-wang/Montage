load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
load("68b329da9893e34099c7d8ad5cb9c940.js");
// Copyright 2012 Google Inc.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @description Tests that Intl.Collator has a supportedLocalesOf
 * property, and it works as planned.
 */

var defaultLocale = new Intl.Collator().resolvedOptions().locale;
var notSupported = 'zxx'; // "no linguistic content"
var requestedLocales = [defaultLocale, notSupported];

var supportedLocales;

if (!Intl.Collator.hasOwnProperty('supportedLocalesOf')) {
    $ERROR("Intl.Collator doesn't have a supportedLocalesOf property.");
}

supportedLocales = Intl.Collator.supportedLocalesOf(requestedLocales);
if (supportedLocales.length !== 1) {
    $ERROR('The length of supported locales list is not 1.');
}

if (supportedLocales[0] !== defaultLocale) {
    $ERROR('The default locale is not returned in the supported list.');
}

