load("201224b0d1c296b45befd2285e95dd42.js");
eval("var OBJ = new MyObject(true); OBJ.valueOf()") 
function MyObject( value ) {
  this.valueOf = new Function( "return this.value" );
}
eval("\
var VERSION = \"ECMA_1\";\
var DATE1 = new Date();\
var MYOB1 = new MyObject( DATE1 );\
function MyProtoValuelessObject() {}\
function Function() {\
  __proto__[MyProtoValuelessObject] = VERSION;\
}");
