load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2013 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 25.2.4.2
description: >
    The `prototype` property of GeneratorFunction instances are created as
    plain objects with no "own" properties.
---*/

var ownProperties = Object.getOwnPropertyNames(function*() {}.prototype);
assert.sameValue(ownProperties.length, 0);
