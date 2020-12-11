load("201224b0d1c296b45befd2285e95dd42.js");
// Return the trap result
var proto = Object.create(null, {
    'foo': {
        configurable: true
    }
});
var target = Object.create(proto, {
    'bar': {
        configurable: true
    }
});

var handler = { has: () => false };

for (let p of [new Proxy(target, handler), Proxy.revocable(target, handler).proxy]) {
    assertEq('foo' in p, false);
    assertEq('bar' in p, false);
}