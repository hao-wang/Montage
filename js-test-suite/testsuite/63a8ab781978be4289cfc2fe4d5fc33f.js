load("201224b0d1c296b45befd2285e95dd42.js");
assertEq(Number.isFinite(Infinity), false);
assertEq(Number.isFinite(-Infinity), false);
assertEq(Number.isFinite(NaN), false);
assertEq(Number.isFinite(4), true);
assertEq(Number.isFinite(4.5), true);
assertEq(Number.isFinite("hi"), false);
assertEq(Number.isFinite("1.3"), false);
assertEq(Number.isFinite("51"), false);
assertEq(Number.isFinite(0), true);
assertEq(Number.isFinite(-0), true);
assertEq(Number.isFinite({valueOf: function () { return 3; }}), false);
assertEq(Number.isFinite({valueOf: function () { return 0/0; }}), false);
assertEq(Number.isFinite({ valueOf: function() { throw 17; } }), false);
assertEq(Number.isFinite({ toString: function() { throw 17; } }), false);
assertEq(Number.isFinite({ valueOf: function() { throw 17; }, toString: function() { throw 42; } }), false);
