load("201224b0d1c296b45befd2285e95dd42.js");
// Removing many Map entries does not cause a live iterator to skip any of the
// entries that were not removed. (Compacting a Map must not be observable to
// script.)

load("e2c808509c360663d6364e14c187fc8f.js");

var map = new Map();
for (var i = 0; i < 32; i++)
    map.set(i, i);
var iter = map[Symbol.iterator]();
assertIteratorNext(iter, [0, 0]);
for (var i = 0; i < 30; i++)
    map.delete(i);
assertEq(map.size, 2);
for (var i = 32; i < 100; i++)
    map.set(i, i);  // eventually triggers compaction

for (var i = 30; i < 100; i++)
    assertIteratorNext(iter, [i, i]);

assertIteratorDone(iter, undefined);
