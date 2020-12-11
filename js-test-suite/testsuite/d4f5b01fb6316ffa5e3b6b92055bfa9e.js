load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("74295afcbe3851329365d06de2aa5a5e.js");
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

var str = "a";
var searchStr = "abc";

var position = new Object();
var valueOfCalled = false;
function positionValueOf() {
    assertEq(valueOfCalled, false);
    valueOfCalled = true;
    return 0;
}
position.valueOf = positionValueOf;

var result = str.lastIndexOf(searchStr, position);
assertEq(result, -1);
assertEq(valueOfCalled, true);

if (typeof reportCompare == "function")
    reportCompare(0, 0);
