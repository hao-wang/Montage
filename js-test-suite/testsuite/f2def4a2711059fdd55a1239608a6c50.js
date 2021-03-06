load("58b503bd09c74262366b2fa86d28cbbf.js");
load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


Debug = debug.Debug

var exception = null;
var frame_depth = 10;

function listener(event, exec_state, event_data, data) {
  if (event != Debug.DebugEvent.Break) return;
  try {
    assertEquals(frame_depth, exec_state.frameCount());
    assertTrue(/\/\/ Break$/.test(exec_state.frame(0).sourceLineText()));
    assertEquals(12 - frame_depth, exec_state.frame(0).evaluate("x").value());
    frame_depth--;
  } catch (e) {
    exception = e;
    print(e + e.stack);
  }
}

function ChooseCode(f, x) {
  if (x == 1) {
    Debug.setBreakPoint(factorial, 4);
  }
  switch (x % 2) {
    case 0:
      %BaselineFunctionOnNextCall(f);
      break;
    case 1:
      %InterpretFunctionOnNextCall(f);
      break;
  }
}

function factorial(x) {
  ChooseCode(factorial, x);
  if (x == 1) return 1;
  var factor = factorial(x - 1);
  return x * factor;  // Break
}

Debug.setListener(listener);

assertEquals(3628800, factorial(10));

Debug.setListener(null);
assertNull(exception);
assertEquals(1, frame_depth);
