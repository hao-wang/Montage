load("201224b0d1c296b45befd2285e95dd42.js");
// Adding a debuggee in a compartment that is already in debug mode works
// even if a script from that compartment is on the stack.

var g = newGlobal();
var dbg1 = Debugger(g);
var dbg2 = Debugger();
g.parent = this;
g.eval("parent.dbg2.addDebuggee(this);");
