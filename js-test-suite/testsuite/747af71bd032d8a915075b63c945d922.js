load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Flags: --allow-natives-syntax

var o = {v:1};
var deopt = false;

Object.defineProperty(o, "x", {
  get: function() { return this.v; },
  set: function(v) {
    this.v = v;
    if (deopt) {
      %DeoptimizeFunction(foo);
    }
  }
});

function foo(o) {
  return o.x++;
}

assertEquals(1, foo(o));
assertEquals(2, foo(o));
%OptimizeFunctionOnNextCall(foo);
deopt = true;
assertEquals(3, foo(o));