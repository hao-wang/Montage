load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-date.prototype.setmonth
es6id: 20.3.4.25
description: Abrupt completion during type coercion of provided "date"
info: |
  1. Let t be LocalTime(? thisTimeValue(this value)).
  2. Let m be ? ToNumber(month).
  3. If date is not specified, let dt be DateFromTime(t); otherwise, let dt be
     ? ToNumber(date).
---*/

var date = new Date();
var originalValue = date.getTime();
var obj = {
  valueOf: function() {
    throw new Test262Error();
  }
};

assert.throws(Test262Error, function() {
  date.setMonth(0, obj);
});

assert.sameValue(date.getTime(), originalValue);