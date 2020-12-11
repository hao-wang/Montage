load("201224b0d1c296b45befd2285e95dd42.js");
// The Set constructor throws TypeError when passed a non-iterable argument.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

var misc = [
    {}, {x: 1}, Math, isNaN,
    Object.create(null),
    true, 0, 3.1416,
    new Boolean(true), new Number(0),
    {iterator: function () { return undefined; }},
    {iterator: function () { return null; }},
    {iterator: function () { return true; }},
    {iterator: function () { return 17; }},
];

for (var v of misc) {
    assertThrowsInstanceOf(function () { new Set(v); }, TypeError);
    assertThrowsInstanceOf(function () { new Map(v); }, TypeError);
}
