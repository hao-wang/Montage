load("201224b0d1c296b45befd2285e95dd42.js");
// Tests that we can reflect optimized out values.
//
// Unfortunately these tests are brittle. They depend on opaque JIT heuristics
// kicking in.

// Use gczeal 0 to keep CGC from invalidating Ion code and causing test failures.
gczeal(0);

load("5f8e112e69147c44d5afba321a9d4ecf.js");

if (!jitTogglesMatch(Opts_Ion2NoOffthreadCompilation))
  quit(0);

withJitOptions(Opts_Ion2NoOffthreadCompilation, function () {
  var g = newGlobal();
  var dbg = new Debugger;

  // Note that this *depends* on CCW scripted functions being opaque to Ion
  // optimization and not deoptimizing the frames below the call to toggle.
  g.toggle = function toggle(d) {
    if (d) {
      dbg.addDebuggee(g);
      var frame = dbg.getNewestFrame();
      assertEq(frame.implementation, "ion");
      // x is unused and should be elided.
      assertEq(frame.environment.getVariable("x").optimizedOut, true);
      assertEq(frame.arguments[1].optimizedOut, true);
    }
  };

  g.eval("" + function f(d, x) {
    "use strict";
    eval("g(d, x)"); // `eval` to avoid inlining g.
  });

  g.eval("" + function g(d, x) {
    "use strict";
    for (var i = 0; i < 200; i++);
    toggle(d);
  });

  g.eval("(" + function test() {
    for (i = 0; i < 5; i++)
      f(false, 42);
    f(true, 42);
  } + ")();");
});