load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: B.2.2.1.2
description: >
    set Object.prototype.__proto__

    17 ECMAScript Standard Built-in Objects

    Functions that are specified as get or set accessor functions of built-in
    properties have "get " or "set " prepended to the property name string.

includes: [propertyHelper.js]
---*/

var descriptor = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__');


assert.sameValue(
  descriptor.set.name, 'set __proto__',
  'The value of `descriptor.set.name` is `"set __proto__"`'
);

verifyNotEnumerable(descriptor.set, 'name');
verifyNotWritable(descriptor.set, 'name');
verifyConfigurable(descriptor.set, 'name');