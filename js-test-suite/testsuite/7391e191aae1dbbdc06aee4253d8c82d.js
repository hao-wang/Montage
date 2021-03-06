load("924921a1ecafccfb4db6dd25ea7b14f2.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 26.3.1
esid: sec-@@tostringtag
description: >
    `Symbol.toStringTag` property descriptor
info: >
    The initial value of the @@toStringTag property is the String value
    "Module".

    This property has the attributes { [[Writable]]: false, [[Enumerable]]:
    false, [[Configurable]]: true }.
flags: [module]
features: [Symbol.toStringTag]
---*/

import * as ns from './Symbol.toStringTag.js';
assert.sameValue(ns[Symbol.toStringTag], 'Module');

// propertyHelper.js is not appropriate for this test because it assumes that
// the object exposes the ordinary object's implementation of [[Get]], [[Set]],
// [[Delete]], and [[OwnPropertyKeys]], which the module namespace exotic
// object does not.
var desc = Object.getOwnPropertyDescriptor(ns, Symbol.toStringTag);

assert.sameValue(desc.enumerable, false, 'reports as non-enumerable');
assert.sameValue(desc.writable, false, 'reports as non-writable');
assert.sameValue(desc.configurable, true, 'reports as configurable');
