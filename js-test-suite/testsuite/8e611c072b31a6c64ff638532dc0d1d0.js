load("201224b0d1c296b45befd2285e95dd42.js");
var n = 16;
var a = new Int32Array(n);
for (var i = 0; i < n; ++i) {
    a[i] = i;
}
var b = new Int32Array(n);
for (var i = 0; i < n; ++i) {
    b[i] = i * 2;
}

a.set(b, 0.99);

for (var i = 0; i < n; ++i) {
    assertEq(a[i], b[i]);
}
