load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2016 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
esid: sec-intl-pluralrules-constructor
description: >
    Tests that objects constructed by Intl.PluralRules have the specified
    internal properties.
author: Zibi Braniecki
---*/

var obj = new Intl.PluralRules();

var actualPrototype = Object.getPrototypeOf(obj);
if (actualPrototype !== Intl.PluralRules.prototype) {
    $ERROR("Prototype of object constructed by Intl.PluralRules isn't Intl.PluralRules.prototype; got " + actualPrototype);
}

if (!Object.isExtensible(obj)) {
    $ERROR("Object constructed by Intl.PluralRules must be extensible.");
}
