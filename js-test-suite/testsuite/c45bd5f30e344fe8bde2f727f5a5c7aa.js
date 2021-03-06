load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) 2015 Jordan Harband. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-object.values
description: Object.values should have length 1
author: Jordan Harband
includes: [propertyHelper.js]
---*/

assert.sameValue(Object.values.length, 1, 'Expected Object.values.length to be 1');

verifyNotEnumerable(Object.values, 'length');
verifyNotWritable(Object.values, 'length');
verifyConfigurable(Object.values, 'length');
