load("201224b0d1c296b45befd2285e95dd42.js");
// Test that baseline frames are marked as debuggee when resuming from
// throwing.

var g = newGlobal();
var dbg = new Debugger(g);

var hits = 0;
dbg.onEnterFrame = function (f) { hits++; };

try {
  g.eval("for (c in (function() { yield })()) h");
} catch (e) {
}

assertEq(hits, 2);
