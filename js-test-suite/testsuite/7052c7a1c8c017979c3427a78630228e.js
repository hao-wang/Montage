load("201224b0d1c296b45befd2285e95dd42.js");

function f() {
    try {} catch (x) {
        return;
    } finally {
        null.x;
    }
}

try {
    f();
} catch (x) {}
