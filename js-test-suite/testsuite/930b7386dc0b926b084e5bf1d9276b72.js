load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Flags: --allow-natives-syntax

function foo(x) {
  x = +x;
  return (x > 0) ? x : 0 - x;
}

foo(1);
foo(-1);
foo(0);
%OptimizeFunctionOnNextCall(foo);
assertEquals(2147483648, foo(-2147483648));
