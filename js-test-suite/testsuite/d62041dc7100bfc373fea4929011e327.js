load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("6b78370695c49b6074ed4ac9ff090dbd.js");
// Copyright (C) 2016 ecmascript_simd authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: simd-to-timd-logical
description: Tests From<type> functions.
includes: [simdUtilities.js]
---*/

function testFrom(toType, fromType, name) {
  assert.sameValue('function', typeof toType.fn[name]);
  for (var v of fromType.interestingValues) {
    var fromValue = createSplatValue(fromType, v);
    v = Math.trunc(simdConvert(fromType, v));
    if (toType.minVal !== undefined &&
        !(toType.minVal <= v && v <= toType.maxVal)) {
      assert.throws(RangeError, function() { toType.fn[name](fromValue) });
    } else {
      v = simdConvert(toType, v);
      var result = toType.fn[name](fromValue);
      checkValue(toType, result, function(index) { return v; });
    }
  }
}

simdTypes.forEach(function(toType) {
  if (!toType.from) return;
  for (var fromType of toType.from) {
    var fn = 'from' + fromType.name;
    testSimdFunction(toType.name + ' ' + fn, function() {
      testFrom(toType, fromType, fn);
    });
  }
});
