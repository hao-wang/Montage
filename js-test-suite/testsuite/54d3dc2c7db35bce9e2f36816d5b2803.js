load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
var BUGNUMBER = 1322314;
var summary = "Function in computed property in class expression in array destructuring default";

print(BUGNUMBER + ": " + summary);

function* g([
  a = class E {
    [ (function() { return "foo"; })() ]() {
      return 10;
    }
  }
]) {
  yield a;
}

let C = [...g([])][0];
let x = new C();
assertEq(x.foo(), 10);

C = [...g([undefined])][0];
x = new C();
assertEq(x.foo(), 10);

if (typeof reportCompare === "function")
  reportCompare(0, 0);
