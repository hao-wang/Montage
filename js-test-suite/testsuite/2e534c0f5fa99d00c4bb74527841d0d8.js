load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-proxy-object-internal-methods-and-internal-slots-defineownproperty-p-desc
es6id: 9.5.6
description: >
    Throw a TypeError exception if Desc and target property descriptor are not
    compatible and trap result is true.
info: |
    [[DefineOwnProperty]] (P, Desc)

    ...
    20. Else targetDesc is not undefined,
        a. If IsCompatiblePropertyDescriptor(extensibleTarget, Desc ,
        targetDesc) is false, throw a TypeError exception.
    ...
---*/

var OProxy = $.createRealm().global.Proxy;
var target = Object.create(null);
var p = new OProxy(target, {
  defineProperty: function() {
    return true;
  }
});

Object.defineProperty(target, 'prop', {
  value: 1,
  configurable: false
});

assert.throws(TypeError, function() {
  Object.defineProperty(p, 'prop', {
    value: 1,
    configurable: true
  });
});
