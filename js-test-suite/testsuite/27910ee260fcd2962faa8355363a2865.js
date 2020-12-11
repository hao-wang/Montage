load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 9.4.4.6 S7
description: >
    Once exhausted, iterators for unmapped arguments exotic objects should not
    emit new values added to the object.
flags: [noStrict]
---*/

(function(a, b, c) {
  'use strict';
  var iterator = arguments[Symbol.iterator]();
  var result;

  iterator.next();
  iterator.next();
  iterator.next();
  iterator.next();

  arguments[3] = 4;
  arguments.length = 4;

  result = iterator.next();
  assert.sameValue(result.value, undefined, 'Exhausted result `value`');
  assert.sameValue(result.done, true, 'Exhausted result `done` flag');
}(2, 1, 3));
