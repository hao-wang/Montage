load("201224b0d1c296b45befd2285e95dd42.js");
load("19d7bc83becec11ee32c3a85fbc4d93d.js");

if (helperThreadCount() === 0)
  quit(0);

function BigInteger(a, b, c) {}
function montConvert(x) {
    var r = new BigInteger(null);
    return r;
}
var ba = new Array();
a = new BigInteger(ba);
g = montConvert(a);
var lfGlobal = newGlobal();
for (lfLocal in this) {
    if (!(lfLocal in lfGlobal)) {
        lfGlobal[lfLocal] = this[lfLocal];
    }
}
lfGlobal.offThreadCompileScript(`
  var dbg = new Debugger(g);
  dbg.onEnterFrame = function (frame) {
    var frameThis = frame.this;
  }
`);
lfGlobal.runOffThreadScript();
assertThrowsInstanceOf(test, ReferenceError);
function test() {
    function check(fun, msg, todo) {
        success = fun();
    }
    check(() => Object.getPrototypeOf(view) == Object.getPrototypeOf(simple));
    typeof this;
}
