load("201224b0d1c296b45befd2285e95dd42.js");
if (typeof schedulegc != 'undefined')
  schedulegc(11);
function foo(n) {
  if (n == 10)
    foo.apply = function(a, b) { return b[0]; }
  return n;
}
function bar() { return foo.apply(null, arguments); }
for (var i = 0; i < 20; i++)
  assertEq(bar(i), i);
