load("201224b0d1c296b45befd2285e95dd42.js");
function f2(a) {
  return f2.arguments;
}

// The first eager-compiled call will bailout, do not assert.
f2();

var o;
o = f2();
assertEq(o.length, 0);

o = f2(21);
assertEq(o.length, 1);
assertEq(o[0], 21);

o = f2(21,42);
assertEq(o.length, 2);
assertEq(o[0], 21);
assertEq(o[1], 42);

// 100 arguments.
o = f2(0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,
       0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,
       0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,
       0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,
       0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9);
for (var i in o)
    assertEq(o[i], i % 10);

// 200 arguments.
o = f2(0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,
       0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,
       0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,
       0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,
       0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,

       0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,
       0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,
       0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,
       0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,
       0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9);
for (var i in o)
    assertEq(o[i], i % 10);

// 300 arguments.
o = f2(0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,
       0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,
       0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,
       0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,
       0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,

       0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,
       0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,
       0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,
       0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,
       0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,

       0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,
       0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,
       0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,
       0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,
       0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9);
for (var i in o)
    assertEq(o[i], i % 10);
