load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2016 Rick Waldron.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-applying-the-exp-operator
description: If abs(base) > 1 and exponent is +∞, the result is +∞.
---*/


var exponent = +Infinity;
var bases = [];
bases[0] = -Infinity;
bases[1] = -1.7976931348623157E308; //largest (by module) finite number
bases[2] = -1.000000000000001;
bases[3] = 1.000000000000001;
bases[4] = 1.7976931348623157E308; //largest finite number
bases[5] = +Infinity;

for (var i = 0; i < bases.length; i++) {
  if ((bases[i] ** exponent) !== +Infinity) {
    $ERROR("(" + bases[i] + " **  " + exponent + ") !== +Infinity");
  }
}
