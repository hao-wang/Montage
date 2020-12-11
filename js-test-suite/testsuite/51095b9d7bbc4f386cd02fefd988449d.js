load("924921a1ecafccfb4db6dd25ea7b14f2.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-date.utc
es6id: 20.3.3.4
description: Infinite values specified to MakeDay produce NaN
info: |
  [...]
  9. Return TimeClip(MakeDate(MakeDay(yr, m, dt), MakeTime(h, min, s, milli))). 

  MakeDay (year, month, date)

  1. If year is not finite or month is not finite or date is not finite, return
     NaN.
---*/

assert.sameValue(Date.UTC(Infinity, 0), NaN, 'year: Infinity');
assert.sameValue(Date.UTC(-Infinity, 0), NaN, 'year: -Infinity');

assert.sameValue(Date.UTC(0, Infinity), NaN, 'month: Infinity');
assert.sameValue(Date.UTC(0, -Infinity), NaN, 'month: -Infinity');

assert.sameValue(Date.UTC(0, 0, Infinity), NaN, 'date: Infinity');
assert.sameValue(Date.UTC(0, 0, -Infinity), NaN, 'date: -Infinity');
