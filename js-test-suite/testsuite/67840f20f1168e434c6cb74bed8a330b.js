load("201224b0d1c296b45befd2285e95dd42.js");
function f1(...arguments) {
    assertEq("1,2,3", arguments.toString());
}
f1(1, 2, 3);
function f2(arguments, ...rest) {
    assertEq(arguments, 42);
    assertEq("1,2,3", rest.toString());
}
f2(42, 1, 2, 3);