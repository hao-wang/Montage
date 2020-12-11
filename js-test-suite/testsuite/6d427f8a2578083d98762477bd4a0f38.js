load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Flags: --allow-natives-syntax --crankshaft

var a = new Float64Array(1);
function len(a) { return a.length; }
assertEquals(1, len(a));
assertEquals(1, len(a));
%OptimizeFunctionOnNextCall(len);
assertEquals(1, len(a));
assertOptimized(len);
