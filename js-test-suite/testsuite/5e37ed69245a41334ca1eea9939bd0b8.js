load("201224b0d1c296b45befd2285e95dd42.js");
function testString() {
    var q;
    for (var i = 0; i <= 9; ++i) {
        q = [];
        q.push(String(void 0));
        q.push(String(true));
        q.push(String(5));
        q.push(String(5.5));
        q.push(String("5"));
        q.push(String([5]));
    }
    return q.join(",");
}
assertEq(testString(), "undefined,true,5,5.5,5,5");
