load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("352fc54052b657308832185e13cd17c9.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.of
description: >
  `of` is %TypedArray%.of
info: >
  22.2.1 The %TypedArray% Intrinsic Object

  The %TypedArray% intrinsic object is a constructor function object that all of
  the TypedArray constructor object inherit from.
includes: [testTypedArray.js]
---*/

testWithTypedArrayConstructors(function(TA) {
  assert.sameValue(
    TA.of, TypedArray.of,
    "method is inherited %TypedArray%.of"
  );
  assert.sameValue(
    TA.hasOwnProperty("of"), false,
    "constructor does not define an own property named 'of'"
  );
});