load("58b503bd09c74262366b2fa86d28cbbf.js");
load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


Debug = debug.Debug

var exception = null;
var break_count = 0;

function listener(event, exec_state, event_data, data) {
  if (event != Debug.DebugEvent.Break) return;
  try {
    print(event_data.sourceLineText());
    assertTrue(event_data.sourceLineText().indexOf(`Break ${break_count++}.`) > 0);
    exec_state.prepareStep(Debug.StepAction.StepIn);
  } catch (e) {
    exception = e;
  }
};

function valueOfCallback() {
  return 2;               // Break 2.
}                         // Break 3.
var o = {};
o.valueOf = valueOfCallback;

Debug.setListener(listener);
debugger;                 // Break 0.
var result = 1 + o;       // Break 1.
Debug.setListener(null);  // Break 4.

assertEquals(3, result);
assertNull(exception);
