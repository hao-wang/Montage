load("201224b0d1c296b45befd2285e95dd42.js");
function f() { return g(abcd => Error()); }
function g(x) { return x(); }
var err = f(1, 2);
var lines = err.stack.split("\n");
assertEq(lines[0].endsWith(":1:33"), true);
assertEq(lines[1].endsWith(":2:24"), true);
