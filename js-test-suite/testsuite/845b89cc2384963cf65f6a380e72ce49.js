load("201224b0d1c296b45befd2285e95dd42.js");
load("19d7bc83becec11ee32c3a85fbc4d93d.js");

// Throw a TypeError if Proxy is not called as a constructor
assertThrowsInstanceOf(function () { Proxy({}, {}); }, TypeError);

// Throw a TypeError if Proxy is called with less than two arguments
assertThrowsInstanceOf(function () { new Proxy(); }, TypeError);
assertThrowsInstanceOf(function () { new Proxy({}); }, TypeError);

// Throw a TypeError if the first argument is not a non-null object
assertThrowsInstanceOf(function () { new Proxy(0, {}); }, TypeError);
assertThrowsInstanceOf(function () { new Proxy(null, {}); }, TypeError);

// Throw a TypeError if the second argument is not a non-null object
assertThrowsInstanceOf(function () { new Proxy({}, 0); }, TypeError);
assertThrowsInstanceOf(function () { new Proxy({}, null); }, TypeError);

// Result of the call should be an object
assertEq(typeof new Proxy({}, {}), 'object');