load("201224b0d1c296b45befd2285e95dd42.js");
// After an implicit toString call throws an exception, the calling frame's
// onStep hook fires.

var g = newGlobal();
g.eval("var x = {toString: function () { debugger; log += 'x'; throw 'mud'; }};");

var dbg = Debugger(g);
dbg.onDebuggerStatement = function (frame) {
    g.log += 'd';
    frame.older.onStep = function () {
        if (!g.log.match(/[sy]$/))
            g.log += 's';
    };
};

g.log = '';
g.eval("try { x + ''; } catch (x) { }\n" +
       "log += 'y';\n");
assertEq(g.log, "dxsy");

g.log = '';
g.eval("try { '' + x; } catch (x) { }\n" +
       "log += 'y';\n");
assertEq(g.log, "dxsy");
