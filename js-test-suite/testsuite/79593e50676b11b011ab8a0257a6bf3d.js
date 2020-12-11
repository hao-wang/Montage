load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("4453bc71711f2269cdbeb3fdd130078c.js");
// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/

//-----------------------------------------------------------------------------
var BUGNUMBER = 601307;
var summary = "with (...) eval(...) is a direct eval";

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

var t = "global";
function test()
{
  var t = "local";
  with ({})
    return eval("t");
}
assertEq(test(), "local");

/******************************************************************************/

if (typeof reportCompare === "function")
  reportCompare(true, true);

print("All tests passed!");
