load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var failing_proxy = new Proxy({}, new Proxy({}, {
  get() { throw "No trap should fire" }}));

assertThrows(() => Object.setPrototypeOf(Object.prototype, failing_proxy), TypeError);
assertThrows(()=>a, ReferenceError);
