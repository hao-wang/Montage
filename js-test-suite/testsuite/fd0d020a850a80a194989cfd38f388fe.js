load("201224b0d1c296b45befd2285e95dd42.js");
function testNEWINIT()
{
    var a;
    for (var i = 0; i < 10; ++i)
        a = [{}];
    return uneval(a);
}
assertEq(testNEWINIT(), "[{}]");
