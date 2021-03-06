load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/// Ecma International makes this code available under the terms and conditions set
/// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the 
/// "Use Terms").   Any redistribution of this code must retain the above 
/// copyright and this notice and otherwise comply with the Use Terms.
/**
 * @path ch11/11.1/11.1.5/11.1.5_7-2-2-s.js
 * @description Strict Mode - SyntaxError is thrown when an assignment to a reserved word is made in  a strict FunctionBody of a PropertyAssignment
 * @onlyStrict
 */


function testcase() {
        "use strict";

        try {
            eval("var data = \"data\";\
            var obj = {\
                set _11_1_5_7_2_2(value) {\
                    public = 42;\
                    data = value;\
                }\
            };\
            obj._11_1_5_7_2_2 = 1;");
            return false;
        } catch (e) {
            return e instanceof SyntaxError;
        }
    }
runTestCase(testcase);
