load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

assertEquals("[\n\u26031,\n\u26032\n]",
             JSON.stringify([1, 2], null, "\u2603"));
