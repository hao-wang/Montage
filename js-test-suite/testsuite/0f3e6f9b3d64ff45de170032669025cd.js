load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright 2016 Microsoft, Inc. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Brian Terlson <brian.terlson@microsoft.com>
esid: pending
description: AsyncFunction has a prototype property with writable false, enumerable false, configurable false.
includes: [propertyHelper.js]
---*/

var AsyncFunction = async function foo() { }.constructor;
verifyNotConfigurable(AsyncFunction, 'prototype');
verifyNotWritable(AsyncFunction, 'prototype');
verifyNotEnumerable(AsyncFunction, 'prototype');
