load("58b503bd09c74262366b2fa86d28cbbf.js");
load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


if (this["debug"]) debug.Debug.setListener(function() {});
var source = "var outer = 0; function test() {'use strict'; outer = 1; } test(); print('ok');";
function test_function() { eval(source); }
assertDoesNotThrow(test_function);