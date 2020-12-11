load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("f84fa150dbe5b1b3e196e3bdf2e8ab6e.js");
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 * Contributor: Jason Orendorff
 */

// This test appeared in bug 497789 comment 78.

var a = {x: 'a'},
    b1 = Object.create(a),
    c1 = Object.create(b1),
    b2 = Object.create(a),
    c2 = Object.create(b2);

b2.x = 'b';  // foreshadowing a.x

var s = '';
for each (var obj in [c1, c2])
    s += obj.x;
assertEq(s, 'ab');

reportCompare(0, 0, "Property cache soundness: objects with the same shape but different prototypes.");
