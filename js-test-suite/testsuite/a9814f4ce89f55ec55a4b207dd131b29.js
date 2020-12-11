load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 19.2.3.6
description: Function.prototype[Symbol.hasInstance] property descriptor
info: >
    This property has the attributes { [[Writable]]: false, [[Enumerable]]:
    false, [[Configurable]]: false }.
features: [Symbol.hasInstance]
includes: [propertyHelper.js]
---*/

assert.sameValue(typeof Function.prototype[Symbol.hasInstance], 'function');

verifyNotEnumerable(Function.prototype, Symbol.hasInstance);
verifyNotWritable(Function.prototype, Symbol.hasInstance);
verifyNotConfigurable(Function.prototype, Symbol.hasInstance);
