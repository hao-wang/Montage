load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("67475d6f299e80572167f8e325dacbed.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    Spares arrays are only equivalent if they have the same length.
includes: [compareArray.js]
---*/

if (compareArray([,], [,]) !== true) {
  $ERROR('Sparse arrays of the same length are equivalent.');
}

if (compareArray([,], [,,]) !== false) {
  $ERROR('Sparse arrays of differing lengths are not equivalent.');
}

if (compareArray([,,], [,]) !== false) {
  $ERROR('Sparse arrays of differing lengths are not equivalent.');
}

if (compareArray([,], []) !== false) {
  $ERROR('Sparse arrays are not equivalent to empty arrays.');
}

if (compareArray([], [,]) !== false) {
  $ERROR('Sparse arrays are not equivalent to empty arrays.');
}
