load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-regular-expression-literals-runtime-semantics-evaluation
es6id: 12.2.8.2
description: Initial state of the `lastIndex` property
info: |
  [...]
  3. Return RegExpCreate(pattern, flags).

  21.2.3.2.3 Runtime Semantics: RegExpCreate

  1. Let obj be ? RegExpAlloc(%RegExp%).
  2. Return ? RegExpInitialize(obj, P, F). 

  21.2.3.2.2 Runtime Semantics: RegExpInitialize

  [...]
  12. Perform ? Set(obj, "lastIndex", 0, true).
  [...]

  21.2.3.2.1 Runtime Semantics: RegExpAlloc

  [...]
  2. Perform ! DefinePropertyOrThrow(obj, "lastIndex", PropertyDescriptor
     {[[Writable]]: true, [[Enumerable]]: false, [[Configurable]]: false}).
  [...]
includes: [propertyHelper.js]
---*/

var re = /./;

assert.sameValue(re.lastIndex, 0);

verifyNotEnumerable(re, 'lastIndex');
verifyWritable(re, 'lastIndex');
verifyNotConfigurable(re, 'lastIndex');