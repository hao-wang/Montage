load("201224b0d1c296b45befd2285e95dd42.js");
// length, string

var expected = "3,6,4,3,6,4,3,6,4,3,6,4,";
var actual = '';

function f() {
  var ss = [ "abc", "foobar", "quux" ];

  for (var i = 0; i < 12; ++i) {
    actual += ss[i%3].length + ',';
  }
}

f();

assertEq(actual, expected);
