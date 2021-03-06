load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("4453bc71711f2269cdbeb3fdd130078c.js");
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

//-----------------------------------------------------------------------------
var BUGNUMBER = 650574;
var summary = 'Check for too-deep stack when converting a value to source';

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

try
{
  var e = Error('');
  e.fileName = e;
  e.toSource();
  throw new Error("should have thrown");
}
catch (e)
{
  assertEq(e instanceof InternalError, true,
           "should have thrown for over-recursion");
}

/******************************************************************************/

if (typeof reportCompare === "function")
  reportCompare(true, true);

print("All tests passed!");
