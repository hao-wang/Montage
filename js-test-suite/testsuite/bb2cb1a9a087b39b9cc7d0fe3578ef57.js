load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

export default null;
var global = Function('return this;')();

if (global.test262) {
  throw new Error('Module was evaluated more than once.');
}

global.test262 = 262;

if (global.test262 !== 262) {
  throw new Error('Module was unable to signal evaluation.');
}