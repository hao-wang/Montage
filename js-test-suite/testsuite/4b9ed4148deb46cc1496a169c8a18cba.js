load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/*---
es6id: 22.1.2.1
description: >
  If this is a constructor, and items doesn't have an @@iterator,
  returns a new instance of this
info: >
  22.1.2.1 Array.from ( items [ , mapfn [ , thisArg ] ] )

  4. Let usingIterator be GetMethod(items, @@iterator).
  ...
  6. If usingIterator is not undefined, then
  ...
  12. If IsConstructor(C) is true, then
    a. Let A be Construct(C, «len»).
  13. Else,
    a. Let A be ArrayCreate(len).
  ...
  19. Return A.
---*/

var result;

function MyCollection() {
  this.args = arguments;
}

result = Array.from.call(MyCollection, {length: 42});

assert.sameValue(result.args.length, 1);
assert.sameValue(result.args[0], 42);
assert(result instanceof MyCollection);
