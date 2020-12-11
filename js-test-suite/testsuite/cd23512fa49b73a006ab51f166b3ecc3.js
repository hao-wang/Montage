load("201224b0d1c296b45befd2285e95dd42.js");
// Resumption values from onNewPromise handlers are disallowed.
if (!('Promise' in this))
    quit(0);

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

var g = newGlobal();
var dbg = new Debugger(g);
var log;

dbg.onNewPromise = function (g) { log += 'n'; return undefined; };
log = '';
assertEq(typeof new g.Promise(function (){}), "object");
assertEq(log, 'n');

dbg.uncaughtExceptionHook = function (ex) { assertEq(/disallowed/.test(ex), true); log += 'u'; }
dbg.onNewPromise = function (g) { log += 'n'; return { return: "snoo" }; };
log = '';
assertEq(typeof new g.Promise(function (){}), "object");
assertEq(log, 'nu');

dbg.onNewPromise = function (g) { log += 'n'; return { throw: "snoo" }; };
log = '';
assertEq(typeof new g.Promise(function (){}), "object");
assertEq(log, 'nu');

dbg.onNewPromise = function (g) { log += 'n'; return null; };
log = '';
assertEq(typeof new g.Promise(function (){}), "object");
assertEq(log, 'nu');

dbg.uncaughtExceptionHook = function (ex) { assertEq(/foopy/.test(ex), true); log += 'u'; }
dbg.onNewPromise = function (g) { log += 'n'; throw "foopy"; };
log = '';
assertEq(typeof new g.Promise(function (){}), "object");
assertEq(log, 'nu');
