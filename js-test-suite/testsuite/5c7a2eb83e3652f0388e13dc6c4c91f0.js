load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Flags: --allow-natives-syntax

var stdlib = this;
var foreign = {};
var heap = new ArrayBuffer(64 * 1024 * 1024);

var foo = (function(stdlib, foreign, heap) {
  "use asm";
  var M16 = new Int16Array(heap);
  var M32 = new Int32Array(heap);
  function foo() {
    M32[0] = 0x12341234;
    var i = M32[0];
    return M16[0];
  }
  return foo;
})(stdlib, foreign, heap);

assertEquals(0x1234, foo());
assertEquals(0x1234, foo());
%OptimizeFunctionOnNextCall(foo);
assertEquals(0x1234, foo());