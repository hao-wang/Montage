load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Flags: --allow-natives-syntax

function foo() { return [+0,false].indexOf(-(4/3)); }
foo();
foo();
%OptimizeFunctionOnNextCall(foo);
foo();
