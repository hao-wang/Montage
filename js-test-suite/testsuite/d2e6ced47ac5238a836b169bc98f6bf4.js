load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("67475d6f299e80572167f8e325dacbed.js");
// Copyright (c) 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


/*---
es6id: 22.1.3.1_3
description: Array.prototype.concat small typed array
includes: [compareArray.js]
---*/
function concatTypedArray(type, elems, modulo) {
  var items = new Array(elems);
  var ta_by_len = new type(elems);
  for (var i = 0; i < elems; ++i) {
    ta_by_len[i] = items[i] = modulo === false ? i : elems % modulo;
  }
  var ta = new type(items);
  assert(compareArray([].concat(ta, ta), [ta, ta]));
  ta[Symbol.isConcatSpreadable] = true;
  assert(compareArray([].concat(ta), items));

  assert(compareArray([].concat(ta_by_len, ta_by_len), [ta_by_len, ta_by_len]));
  ta_by_len[Symbol.isConcatSpreadable] = true;
  assert(compareArray([].concat(ta_by_len), items));

  // TypedArray with fake `length`.
  ta = new type(1);
  var defValue = ta[0];
  var expected = new Array(4000);
  expected[0] = defValue;

  Object.defineProperty(ta, "length", { value: 4000 });
  ta[Symbol.isConcatSpreadable] = true;
  assert(compareArray([].concat(ta), expected));
}
var max = [Math.pow(2, 8), Math.pow(2, 16), Math.pow(2, 32), false, false];
[
  Uint8Array,
  Uint16Array,
  Uint32Array,
  Float32Array,
  Float64Array
].forEach(function(ctor, i) {
  concatTypedArray(ctor, 1, max[i]);
});