load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 Jordan Harband. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-object.entries
description: >
    Object.entries should not have its behavior impacted by modifications to the global property Object
author: Jordan Harband
---*/

function fakeObject() {
    $ERROR('The overriden version of Object was called!');
}
fakeObject.entries = Object.entries;

var global = Function('return this;')();
global.Object = fakeObject;

assert.sameValue(Object, fakeObject, 'Sanity check failed: could not modify the global Object');
assert.sameValue(Object.entries(1).length, 0, 'Expected number primitive to have zero entries');
