load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| exitstatus: 6;

load("789647b4b1873ad4adf74568147f8449.js");

enableGeckoProfiling();

var f = asmLink(asmCompile('glob', 'ffis', 'buf', USE_ASM + "function g() { var i=0; while (1) { i=(i+1)|0 } } function f() { g() } return f"));
timeout(1);
if (getBuildConfiguration()["arm-simulator"])
    enableSingleStepProfiling();
f();
assertEq(true, false);
