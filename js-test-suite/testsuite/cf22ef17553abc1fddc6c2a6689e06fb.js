load("201224b0d1c296b45befd2285e95dd42.js");
function addAccumulations(f) {
  var a = f();
  var b = f();
  return a() + b();
}

function loopingAccumulator() {
  var x = 0;
  return function () {
    for (var i = 0; i < 10; ++i) {
      ++x;
    }
    return x;
  }
}

var x = addAccumulations(loopingAccumulator);
assertEq(x, 20);
