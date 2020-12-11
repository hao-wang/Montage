load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("67475d6f299e80572167f8e325dacbed.js");
// Copyright (c) 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


/*---
es6id: 22.1.3.1_3
description: Array.prototype.concat array like
includes: [compareArray.js]
---*/
var obj = {
  "length": 6,
  "1": "A",
  "3": "B",
  "5": "C"
};
obj[Symbol.isConcatSpreadable] = true;
var obj2 = { length: 3, "0": "0", "1": "1", "2": "2" };
var arr = ["X", "Y", "Z"];

var expected = [
  void 0, "A", void 0, "B", void 0, "C",
  obj2,
  "X", "Y", "Z"
];
var actual = Array.prototype.concat.call(obj, obj2, arr);

assert(compareArray(actual, expected));
