load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
//
// Flags: --harmony-do-expressions --allow-natives-syntax

function func1() {
  for (var i = 0; i < 64; ++i) func2();
}

%OptimizeFunctionOnNextCall(func1);
func1();

function func2() {
  var v = do {};
}
