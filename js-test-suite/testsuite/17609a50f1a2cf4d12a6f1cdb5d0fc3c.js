load("201224b0d1c296b45befd2285e95dd42.js");
// frame.environment can be called from the onEnterFrame hook.

var g = newGlobal();
g.eval("function f(x) { return 2 * x; }");
var dbg = Debugger(g);
var hits = 0;
dbg.onEnterFrame = function (frame) {
    assertEq(frame.environment.names().join(","), "arguments,x");
    hits++;
};
assertEq(g.f(22), 44);
assertEq(hits, 1);
