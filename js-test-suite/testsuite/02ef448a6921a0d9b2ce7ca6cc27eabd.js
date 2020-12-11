load("201224b0d1c296b45befd2285e95dd42.js");
// findObjects' result doesn't include any duplicates.

var g = newGlobal();
var dbg = new Debugger();
dbg.addDebuggee(g);

let objects = dbg.findObjects();
let set = new Set(objects);

assertEq(objects.length, set.size);
