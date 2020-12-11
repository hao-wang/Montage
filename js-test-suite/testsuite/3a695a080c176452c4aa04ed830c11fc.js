load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-proxy-object-internal-methods-and-internal-slots-getprototypeof
es6id: 9.5.1
description: >
  Throws if trap is not callable (honoring the Realm of the current execution
  context)
---*/

var OProxy = $.createRealm().global.Proxy;
var p = new OProxy({}, {
  getPrototypeOf: {}
});

assert.throws(TypeError, function() {
  Object.getPrototypeOf(p);
});