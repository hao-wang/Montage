load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| slow
// This test is too slow to run with ASan in a debug configuration
if (getBuildConfiguration()['asan'] && getBuildConfiguration()['debug']) quit(0);

function fatty() {
    try {
        fatty();
    } catch (e) {
        foo();
    }
}

if (!getBuildConfiguration()['root-analysis']) { // >:(
    foo = evalcx("(function foo() { foo.bar() })");
    foo.bar = evalcx("(function bar() {})");

    fatty();
}
