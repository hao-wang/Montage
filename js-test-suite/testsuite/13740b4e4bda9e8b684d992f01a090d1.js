load("58b503bd09c74262366b2fa86d28cbbf.js");
load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


function f() {
  print(1);
  print(2);
  print(3);
}

var Debug = debug.Debug;
var exception = null;
var breaks = [];

function listener(event, exec_state, event_data, data) {
  if (event != Debug.DebugEvent.Break) return;
  try {
    Debug.debuggerFlags().breakPointsActive.setValue(false);
    breaks.push(exec_state.frame().sourceLineText().trimLeft());
    exec_state.prepareStep(Debug.StepAction.StepIn);
  } catch (e) {
    exception = e;
  }
}

Debug.setListener(listener);
Debug.setBreakPoint(f, 0, 0);

f();

Debug.setListener(null);
Debug.debuggerFlags().breakPointsActive.setValue(true);

assertNull(exception);
assertEquals(breaks, ["print(1);", "print(2);", "print(3);", "}",
                      "Debug.setListener(null);"]);
