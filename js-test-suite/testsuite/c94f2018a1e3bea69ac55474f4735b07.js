load("201224b0d1c296b45befd2285e95dd42.js");
load("5e07573edde9c7ad8cf5db2a66f56d4d.js");

setJitCompilerOption("ion.warmup.trigger", 50);

function f() {
    var b1 = SIMD.Bool32x4(true, false, true, false);
    var b2 = SIMD.Bool32x4(true, true, true, true);
    do {
        assertEqX4(SIMD.Bool32x4.and(b1, b2), booleanBinaryX4((x, y) => x && y, b1, b2));
        assertEqX4(SIMD.Bool32x4.or(b1, b2),  booleanBinaryX4((x, y) => x || y, b1, b2));
        assertEqX4(SIMD.Bool32x4.xor(b1, b2), booleanBinaryX4((x, y) => x != y, b1, b2));
    } while (!inIon());
}

f();
