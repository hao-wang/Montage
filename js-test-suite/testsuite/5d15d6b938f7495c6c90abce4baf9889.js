load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("4453bc71711f2269cdbeb3fdd130078c.js");
var f = function (q) { return q['\xC7']; }
var d = eval(uneval(f));
assertEq(d({'\xC7': 'good'}), 'good');

if (typeof reportCompare === "function")
    reportCompare(true, true);
