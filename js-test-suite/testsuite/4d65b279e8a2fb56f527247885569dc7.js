load("201224b0d1c296b45befd2285e95dd42.js");
var res = 0;
var o = {__proto__: function() { res++; }};

function f() {
    for (var i=0; i<70; i++) {
        o.__proto__();
    }
}
f();
assertEq(res, 70);
