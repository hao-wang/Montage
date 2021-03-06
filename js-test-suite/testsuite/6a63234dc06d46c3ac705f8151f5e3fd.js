load("201224b0d1c296b45befd2285e95dd42.js");
// Returning and throwing objects.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

var g = newGlobal();
g.debuggeeGlobal = this;
g.eval("(" + function () {
        var how, what;
        var dbg = new Debugger(debuggeeGlobal);
        dbg.onDebuggerStatement = function (frame) {
            if (frame.callee.name === "configure") {
                how = frame.arguments[0];
                what = frame.arguments[1];
            } else {
                var resume = {};
                resume[how] = what;
                return resume;
            }
        };
    } + ")();");

function configure(how, what) { debugger; }
function fire() { debugger; }

var d = new Date;
configure('return', d);
assertEq(fire(), d);
configure('return', Math);
assertEq(fire(), Math);

var x = new Error('oh no what are you doing');
configure('throw', x);
assertThrowsValue(fire, x);
configure('throw', parseInt);
assertThrowsValue(fire, parseInt);
