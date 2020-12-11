load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("45e1d6de6cbdd6f2ea33d472d566096a.js");
var order = 0;
function assertOrdering(ordering) {
    assertEq(order, ordering);
    order++;
}

// Spec mandates that the prototype is looked up /before/ we toString the
// argument.
var handler = { get() { assertOrdering(0); return Error.prototype } };
var errorProxy = new Proxy(Error, handler);

var toStringable = { toString() { assertOrdering(1); return "Argument"; } };

new errorProxy(toStringable);

if (typeof reportCompare === 'function')
    reportCompare(0,0,"OK");
