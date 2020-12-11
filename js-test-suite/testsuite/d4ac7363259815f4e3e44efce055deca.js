load("201224b0d1c296b45befd2285e95dd42.js");
// Bug 894781
function m(stdlib)
{
  "use asm";
  var abs = stdlib.Math.abs;
  function f(d)
  {
    d = +d;
    return (~~(5.0 - +abs(d)))|0;
  }
  return f;
}
var f = m(this);
assertEq(f(0.2), 4);
assertEq(f(NaN), 0);
