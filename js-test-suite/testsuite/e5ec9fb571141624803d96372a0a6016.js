load("201224b0d1c296b45befd2285e95dd42.js");
var f = new Function('x', 'var f = 3; if (x) function f() {}; return f');
assertEq(f(false), 3);
assertEq(typeof f(true), "function");

var f = new Function('x', '"use strict"; x = 3; return arguments[0]');
assertEq(f(42), 42);
