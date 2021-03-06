load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: Property descriptor for `Number.MIN_SAFE_INTEGER`
esid: sec-number.min_safe_integer
es6id: 20.1.2.8
info: >
    The value of Number.MIN_SAFE_INTEGER is −9007199254740991

    This property has the attributes { [[Writable]]: false, [[Enumerable]]:
    false, [[Configurable]]: false }.
includes: [propertyHelper.js]
---*/

var desc = Object.getOwnPropertyDescriptor(Number, 'MIN_SAFE_INTEGER');

assert.sameValue(desc.set, undefined, 'Does not define a `get` accessor');
assert.sameValue(desc.get, undefined, 'Does not define a `set` accessor');
assert.sameValue(desc.value, -9007199254740991);

verifyNotEnumerable(Number, 'MIN_SAFE_INTEGER');
verifyNotWritable(Number, 'MIN_SAFE_INTEGER');
verifyNotConfigurable(Number, 'MIN_SAFE_INTEGER');
