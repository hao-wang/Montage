load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: TestComplete
// onPop can change a termination into a throw.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");
var g = newGlobal();
var dbg = new Debugger(g);

function test(type, provocation) {
    var log;

    // Help people figure out which 'test' call failed.
    print("type:        " + uneval(type));
    print("provocation: " + uneval(provocation));

    dbg.onDebuggerStatement = function handleDebuggerStatement(f) {
        log += 'd';
        return null;
    };

    dbg.onEnterFrame = function handleEnterFrame(f) {
        log += '(';
        assertEq(f.type, type);
        f.onPop = function handlePop(c) {
            log += ')';
            assertEq(c, null);
            return { throw: 'snow' };
        };
    };

    log = '';
    assertThrowsValue(provocation, 'snow');
    assertEq(log, "(d)");

    print();
}

g.eval("function f() { debugger; return 'termination fail'; }");
test("call", g.f);
test("call", function () { return new g.f; });
test("eval", function () { return g.eval("debugger; \'termination fail\';"); });
test("global", function () { return g.evaluate("debugger; \'termination fail\';"); });
throw 'TestComplete';
