load("201224b0d1c296b45befd2285e95dd42.js");
function f(x) {
    return Math.fround((x ? 0 : x) | Math.max(x, x));
}
for (var j = 0; j < 2; ++j) {
    assertEq(f((function(){}) - 4294967297 ? 1 : 1 | 0 && 4294967297), 1);
}
