load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Flags: --turbo --turbo-escape --allow-natives-syntax

function fn(a) {
  var [b] = a;
  return b;
}

fn('a');
fn('a');
%OptimizeFunctionOnNextCall(fn);

fn('a');
