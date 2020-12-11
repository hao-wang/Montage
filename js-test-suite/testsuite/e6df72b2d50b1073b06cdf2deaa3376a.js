load("201224b0d1c296b45befd2285e95dd42.js");
// Debugger.Script.prototype.script returns the global the script runs in.

var g = newGlobal();
var dbg = new Debugger;
var gw = dbg.addDebuggee(g);

var log = '';
dbg.onDebuggerStatement = function (frame) {
  log += 'd';
  assertEq(frame.script.global, gw);
}

g.eval('debugger;');
assertEq(log, 'd');

g.eval('function f() { debugger; }');
g.f();
assertEq(log, 'dd');

assertEq(gw.getOwnPropertyDescriptor('f').value.global, gw);
