load("201224b0d1c296b45befd2285e95dd42.js");
// Binary: cache/js-dbg-64-38a487da2def-linux
// Flags:
//

var x = newGlobal().Date;
var OBJ = new MyObject( new x(0) );
try { eval("OBJ.valueOf()"); } catch(exc1) {}
function MyObject( value ) {
  this.valueOf = x.prototype.valueOf;
}
