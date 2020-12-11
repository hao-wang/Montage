load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

export { g as g2 } from './instn-iee-bndng-gen.js';

// Taken together, the following two assertions demonstrate that there is no
// entry in the environment record for ImportName:
assert.throws(ReferenceError, function() {
  g;
});
assert.sameValue(typeof g, 'undefined');

// Taken together, the following two assertions demonstrate that there is no
// entry in the environment record for ExportName:
assert.throws(ReferenceError, function() {
  g2;
});
assert.sameValue(typeof g2, 'undefined');
