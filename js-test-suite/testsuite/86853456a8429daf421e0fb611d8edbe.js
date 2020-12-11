load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| test-also-wasm-baseline; error: TestComplete

if (!wasmIsSupported())
     throw "TestComplete";

(function createShortLivedDebugger() {
    var g = newGlobal();
    g.debuggeeGlobal = this;
    g.eval("(" + function () {
        dbg = new Debugger(debuggeeGlobal);
    } + ")();");
})();

let module = new WebAssembly.Module(wasmTextToBinary('(module (func))'));
new WebAssembly.Instance(module);

gcslice(1000000);

new WebAssembly.Instance(module);

throw "TestComplete";