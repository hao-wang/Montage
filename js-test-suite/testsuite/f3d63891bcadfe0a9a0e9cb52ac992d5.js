load("201224b0d1c296b45befd2285e95dd42.js");

setJitCompilerOption("baseline.warmup.trigger", 10);

function main() {
    for (var i = 0; i < 50; i++)
        eval("for (var j = 0; j < 50; j++) readGeckoProfilingStack();");
}

gczeal(2, 10000);
enableGeckoProfilingWithSlowAssertions();
main();
