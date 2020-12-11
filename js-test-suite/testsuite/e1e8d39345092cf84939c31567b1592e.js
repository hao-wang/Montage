load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("74295afcbe3851329365d06de2aa5a5e.js");
// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/

//-----------------------------------------------------------------------------
var BUGNUMBER = 582643;
var summary = "'0x' not followed by hex digits should be a syntax error";

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

try
{
  eval("0x");
  throw new Error("didn't throw parsing 0x (with no subsequent hex digits)");
}
catch (e)
{
  assertEq(e instanceof SyntaxError, true,
           "bad exception thrown: " + e);
}

/******************************************************************************/

if (typeof reportCompare === "function")
  reportCompare(true, true);

print("All tests passed!");
