load("201224b0d1c296b45befd2285e95dd42.js");
/* vim: set ts=8 sts=4 et sw=4 tw=99: */

function g(a, b, c, d) {
    return "" + a + b + c + d;
}

var x = 1;
function f(a, b, c) {
    arguments[1] = 2;
    arguments[2] = 3;
    arguments[3] = 4;
    if (!x)
        arguments.length = 4;
    var k;
    for (var i = 0; i < 10; i++)
        k = g.apply(this, arguments);
    return k;
}

assertEq(f(1), "1undefinedundefinedundefined");
x = 0;
assertEq(f(1), "1234");

