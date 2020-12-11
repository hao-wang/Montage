load("201224b0d1c296b45befd2285e95dd42.js");
// frame.arguments works for all live frames

var g = newGlobal();
var dbg = new Debugger(g);
var hits = 0;
dbg.onDebuggerStatement = function (frame) {
    for (var i = 0; i <= 4; i++) {
        assertEq(frame.arguments.length, 1);
        assertEq(frame.arguments[0], i);
        frame = frame.older;
    }
    assertEq(frame, null);
    hits++;
};

g.eval("function f(n) { if (n == 0) debugger; else f(n - 1); }");
g.f(4);
assertEq(hits, 1);
