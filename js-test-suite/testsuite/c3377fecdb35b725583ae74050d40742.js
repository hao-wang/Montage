load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| exitstatus:6
timeout(1);
// Adapted from randomly chosen test: js/src/jit-test/tests/asm.js/testBug975182.js
(function() {
    g = (function(t, foreign) {
        "use asm";
        var ff = foreign.ff;
        function f() {
            ff()
        }
        return f
    })(this, {
        ff: arguments.callee
    })
})()
function m(f) {
    var i = 0;
    while (true) {
        f();
        if ((i++ % 1000) === 0)
            gc();
    }
}
m(g);
