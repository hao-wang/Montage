load("201224b0d1c296b45befd2285e95dd42.js");
function x() { n; }
function f() {
  try  { x(); } catch(ex) {}
}
var g = newGlobal();
g.parent = this;
g.eval("new Debugger(parent).onExceptionUnwind = function () {};");
enableGeckoProfiling();
try {
  enableSingleStepProfiling();
} catch (e) {
  // Not all platforms support single-step profiling.
}
f();
f();
f();
