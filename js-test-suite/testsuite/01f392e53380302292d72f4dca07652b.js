load("201224b0d1c296b45befd2285e95dd42.js");
function f(x) {
    try {
        eval(x);
    } catch (e) {}
};
f("enableGeckoProfilingWithSlowAssertions();");
f("enableTrackAllocations(); throw Error();");
