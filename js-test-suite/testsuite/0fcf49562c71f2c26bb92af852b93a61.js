load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error:Error

// Binary: cache/js-dbg-64-4a9a6ffd1f21-linux
// Flags:
//
function jsTestDriverEnd() {}
this.__defineSetter__("x", function () {});
x %= 5;
jsTestDriverEnd();
mjitChunkLimit();
