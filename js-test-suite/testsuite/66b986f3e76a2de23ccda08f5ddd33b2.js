load("201224b0d1c296b45befd2285e95dd42.js");
load("19d7bc83becec11ee32c3a85fbc4d93d.js");
/*
 * Call the trap with the handler as the this value, the target as the first
 * argument, and the original arguments as the third argument.
 *
 * Hooks that don't return an object must throw.
 */
var p;
var target = function () {};
var handler = {
    construct: function (target1, args, newTarget) {
        assertEq(this, handler);
        assertEq(target1, target);
        assertEq(args.length, 2);
        assertEq(args[0], 2);
        assertEq(args[1], 3);
        assertEq(newTarget, p);
    }
}
for (p of [new Proxy(target, handler), Proxy.revocable(target, handler).proxy])
    assertThrowsInstanceOf(function () {new p(2, 3)}, TypeError);
