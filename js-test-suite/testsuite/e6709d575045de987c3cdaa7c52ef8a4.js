load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| need-for-each

//test no assert
function testBug465688() {
    for each (let d in [-0x80000000, -0x80000000]) - -d;
    return true;
}
assertEq(testBug465688(), true);
