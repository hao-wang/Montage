load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| exitstatus: 3

enableTrackAllocations();
function f() {
    eval('f();');
}
f();
