load("201224b0d1c296b45befd2285e95dd42.js");
// Multiple live iterators on the same Set can cope with removing entries.

load("e2c808509c360663d6364e14c187fc8f.js");

// Make a set.
var set = new Set();
var SIZE = 7;
for (var j = 0; j < SIZE; j++)
    set.add(j);

// Make lots of iterators pointing to entry 2 of the set.
var NITERS = 5;
var iters = [];
for (var i = 0; i < NITERS; i++) {
    var iter = set[Symbol.iterator]();
    assertIteratorNext(iter, 0);
    assertIteratorNext(iter, 1);
    iters[i] = iter;
}

// Remove half of the set entries.
for (var j = 0; j < SIZE; j += 2)
    set.delete(j);

// Make sure all the iterators still work.
for (var i = 0; i < NITERS; i++) {
    var iter = iters[i];
    for (var j = 3; j < SIZE; j += 2)
        assertIteratorNext(iter, j);
    assertIteratorDone(iter, undefined);
}
