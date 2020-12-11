load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("4453bc71711f2269cdbeb3fdd130078c.js");
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

var BUGNUMBER = 501739;
var summary =
  "String.prototype.match behavior with zero-length matches involving " +
  "forward lookahead";

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

var r = /(?=x)/g;

var res = "aaaaaaaaaxaaaaaaaaax".match(r);
assertEq(res.length, 2);

/******************************************************************************/

if (typeof reportCompare === "function")
  reportCompare(true, true);

print("Tests complete");
