load("201224b0d1c296b45befd2285e95dd42.js");
load("19d7bc83becec11ee32c3a85fbc4d93d.js");
var oldOpts = getJitCompilerOptions();
for (var k in oldOpts)
    setJitCompilerOption(k, oldOpts[k]);
var newOpts = getJitCompilerOptions();
assertDeepEq(oldOpts, newOpts);
