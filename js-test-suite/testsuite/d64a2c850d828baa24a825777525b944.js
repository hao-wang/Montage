load("201224b0d1c296b45befd2285e95dd42.js");
load("789647b4b1873ad4adf74568147f8449.js");
load("19d7bc83becec11ee32c3a85fbc4d93d.js");

var fatFunc = USE_ASM + '\n';
for (var i = 0; i < 100; i++)
    fatFunc += "function f" + i + "() { return ((f" + (i+1) + "()|0)+1)|0 }\n";
fatFunc += "function f100() { return 42 }\n";
fatFunc += "return f0";

for (let threshold of [0, 50, 100, 5000, -1]) {
    setJitCompilerOption("jump-threshold", threshold);

    assertEq(asmCompile(
        USE_ASM + `
            function h() { return ((g()|0)+2)|0 }
            function g() { return ((f()|0)+1)|0 }
            function f() { return 42 }
            return h
        `)()(), 45);

    if (isSimdAvailable() && this.SIMD) {
        var buf = new ArrayBuffer(BUF_MIN);
        new Int32Array(buf)[0] = 10;
        new Float32Array(buf)[1] = 42;
        assertEq(asmCompile('stdlib', 'ffis', 'buf',
            USE_ASM + `
                var H = new stdlib.Uint8Array(buf);
                var i4 = stdlib.SIMD.Int32x4;
                var f4 = stdlib.SIMD.Float32x4;
                var i4load = i4.load;
                var f4load = f4.load;
                var toi4 = i4.fromFloat32x4;
                var i4ext = i4.extractLane;
                function f(i) { i=i|0; return i4ext(i4load(H, i), 0)|0 }
                function g(i) { i=i|0; return (i4ext(toi4(f4load(H, i)),1) + (f(i)|0))|0 }
                function h(i) { i=i|0; return g(i)|0 }
                return h
            `)(this, null, buf)(0), 52);
    }

    enableGeckoProfiling();
    asmLink(asmCompile(USE_ASM + 'function f() {} function g() { f() } function h() { g() } return h'))();
    disableGeckoProfiling();

    assertEq(asmCompile(fatFunc)()(), 142);
}
