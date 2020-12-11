load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("352fc54052b657308832185e13cd17c9.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.prototype.slice
description: Result does not import own properties
info: >
  22.2.3.24 %TypedArray%.prototype.slice( start , end )
includes: [testTypedArray.js]
---*/

testWithTypedArrayConstructors(function(TA) {
  var sample = new TA([41, 42, 43, 44]);
  sample.foo = 42;

  var result = sample.slice();
  assert.sameValue(
    result.hasOwnProperty("foo"),
    false,
    "does not import own property"
  );
});
