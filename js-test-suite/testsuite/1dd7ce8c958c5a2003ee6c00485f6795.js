load("201224b0d1c296b45befd2285e95dd42.js");
load("00e0aa336e6c8b65ee1f164279cff5fc.js");

function callee() {
  evalInFrame(1, "var x = 'success'");
}
callee();
assertEq(x, "success");
