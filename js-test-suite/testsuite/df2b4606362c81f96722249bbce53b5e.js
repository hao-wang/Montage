load("201224b0d1c296b45befd2285e95dd42.js");
function g(x) {
    assertEq(arguments.length, 1);
    assertEq(x.length, 4);
}

function f() {
    for (var i = 0; i < 9; i++)
        g(arguments);
}

f(1, 2, 3, 4);
