load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
load("68b329da9893e34099c7d8ad5cb9c940.js");
// Copyright 2012 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @description Tests that the behavior of a List is not affected by adversarial
 *     changes to Array.prototype.
 * @author Norbert Lindenberg
 */

$INCLUDE("3bd8fde197e9106a216a7e98b929475a.js");

taintArray();

testWithIntlConstructors(function (Constructor) {
    // this test should work equally for both matching algorithms
    ["lookup", "best fit"].forEach(function (matcher) {
        var defaultLocale = new Constructor().resolvedOptions().locale;
        var canonicalized = Constructor.supportedLocalesOf([defaultLocale, defaultLocale],
            {localeMatcher: matcher});
        if (canonicalized.length > 1) {
            $ERROR("Canonicalization with matcher " + matcher + " didn't remove duplicate language tags from locale list.");
        }
    });

    return true;
});

