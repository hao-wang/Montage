load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: String coercion of first parameter
es6id: 21.2.5.6
info: >
    21.2.5.6 RegExp.prototype [ @@match ] ( string )

    [...]
    3. Let S be ToString(string)
    [...]
features: [Symbol.match]
---*/

var obj = {
  valueOf: function() {
    $ERROR('This method should not be invoked.');
  },
  toString: function() {
    return 'toString value';
  }
};

assert.notSameValue(/toString value/[Symbol.match](obj), null);
