load("201224b0d1c296b45befd2285e95dd42.js");
function testNestedForIn() {
    var a = {x: 1, y: 2, z: 3};
    var s = '';
    for (var p1 in a)
        for (var p2 in a)
            s += p1 + p2 + ' ';
    return s;
}
assertEq(testNestedForIn(), 'xx xy xz yx yy yz zx zy zz ');
