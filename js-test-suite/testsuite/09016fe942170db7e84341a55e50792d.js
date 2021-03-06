load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Flags: --allow-natives-syntax

let log = [];

(async function() {
  with ({get ['.promise']() { log.push('async') }}) {
    return 10;
  }
})();
%RunMicrotasks();

(function() {
  with ({get ['.new.target']() { log.push('new.target') }}) {
    return new.target;
  }
})();

(function() {
  with ({get ['this']() { log.push('this') }}) {
    return this;
  }
})();

assertArrayEquals([], log);
