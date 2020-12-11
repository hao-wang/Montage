load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("68b329da9893e34099c7d8ad5cb9c940.js");
// |reftest| skip-if(!xulRuntime.shell) -- needs clone, cloneAndExecuteScript, drainJobQueue

// Async function cannot be cloned.
assertThrowsInstanceOf(() => clone(async function f() {}), TypeError);

// unwrapped async function can be cloned.
let g = newGlobal();
cloneAndExecuteScript(`
async function f() {
  var a = await 1;
  var b = await 2;
  var c = await 3;
  return a + b + c;
}
var V;
f().then(v => V = v);
drainJobQueue();
`, g);
assertEq(g.V, 6);

if (typeof reportCompare === "function")
    reportCompare(true, true);
