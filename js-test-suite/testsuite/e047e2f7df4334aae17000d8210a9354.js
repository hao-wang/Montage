load("201224b0d1c296b45befd2285e95dd42.js");
// Removing many Set entries does not cause a live iterator to skip any of the
// entries that were not removed. (Compacting a Set must not be observable to
// script.)

load("e2c808509c360663d6364e14c187fc8f.js");

var set = new Set();
for (var i = 0; i < 32; i++)
    set.add(i);
var iter = set[Symbol.iterator]();
assertIteratorNext(iter, 0);
for (var i = 0; i < 30; i++)
    set.delete(i);
assertEq(set.size, 2);
for (var i = 32; i < 100; i++)
    set.add(i);  // eventually triggers compaction

for (var i = 30; i < 100; i++)
    assertIteratorNext(iter, i);
assertIteratorDone(iter, undefined);
