load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) 2016 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-Intl.Collator.prototype.resolvedOptions
description: >
  Intl.Collator.prototype.resolvedOptions.name is "resolvedOptions".
info: >
  10.3.5 Intl.Collator.prototype.resolvedOptions ()

  17 ECMAScript Standard Built-in Objects:
    Every built-in Function object, including constructors, that is not
    identified as an anonymous function has a name property whose value
    is a String.

    Unless otherwise specified, the name property of a built-in Function
    object, if it exists, has the attributes { [[Writable]]: false,
    [[Enumerable]]: false, [[Configurable]]: true }.
includes: [propertyHelper.js]
---*/

assert.sameValue(Intl.Collator.prototype.resolvedOptions.name, "resolvedOptions");

verifyNotEnumerable(Intl.Collator.prototype.resolvedOptions, "name");
verifyNotWritable(Intl.Collator.prototype.resolvedOptions, "name");
verifyConfigurable(Intl.Collator.prototype.resolvedOptions, "name");
