load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("557a2aa517df980b770aad6faed1c24d.js");
var BUGNUMBER = 1184922;
var summary = "Array destructuring with various default values in various context - function expression with nested objects";

print(BUGNUMBER + ": " + summary);

testDestructuringArrayDefault("function f() { return { f() {}, *g() {}, r: /a/ }; }");
testDestructuringArrayDefault("function* g() { return { f() {}, *g() {}, r: /b/ }; }");
testDestructuringArrayDefault("() => { return { f() {}, *g() {}, r: /c/ }; }");

if (typeof reportCompare === "function")
  reportCompare(true, true);
