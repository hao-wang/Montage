load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| allow-oom

if (!('oomTest' in this))
    quit();

function f() {
    eval("(function() y)()");
}
oomTest(f);
fullcompartmentchecks(true);
