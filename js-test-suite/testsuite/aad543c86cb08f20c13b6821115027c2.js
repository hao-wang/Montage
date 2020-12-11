load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/// Ecma International makes this code available under the terms and conditions set
/// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the 
/// "Use Terms").   Any redistribution of this code must retain the above 
/// copyright and this notice and otherwise comply with the Use Terms.
/**
 * @path ch08/8.7/8.7.2/8.7.2-3-s.js
 * @description Strict Mode - TypeError is thrown if LeftHandSide is a reference to a non-writable data property
 * @onlyStrict
 */


function testcase() {
        "use strict";
        var _8_7_2_3 = {};
        Object.defineProperty(_8_7_2_3, "b", {
            writable: false
        });

        try {
            _8_7_2_3.b = 11;
            return false;
        } catch (e) {
            return e instanceof TypeError;
        }
    }
runTestCase(testcase);
