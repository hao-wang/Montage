load("201224b0d1c296b45befd2285e95dd42.js");
function testDivision() {
    var a = 32768;
    var b;
    while (b !== 1) {
        b = a / 2;
        a = b;
    }
    return a;
}
assertEq(testDivision(), 1);
