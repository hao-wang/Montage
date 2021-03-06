load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/// Ecma International makes this code available under the terms and conditions set
/// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the 
/// "Use Terms").   Any redistribution of this code must retain the above 
/// copyright and this notice and otherwise comply with the Use Terms.
/**
 * @path ch07/7.6/7.6.1/7.6.1-8-15.js
 * @description Allow reserved words as property names by set function within an object, accessed via indexing: package, protected, static
 */


function testcase() {
        var test0 = 0, test1 = 1, test2 = 2;
        var tokenCodes  = {
            set package(value){
                test0 = value;
            },
            get package(){
                return test0;
            },
            set protected(value){
                test1 = value;
            },
            get protected(){
                return test1
            },
            set static(value){
                test2 = value;
            },
            get static(){
                return test2;
            }
        }; 
        var arr = [
            'package',
            'protected',
            'static'  
        ];
        for (var i = 0; i < arr.length; i++) {
            if (tokenCodes[arr[i]] !== i) {
                return false;
            };
        }
        return true;
    }
runTestCase(testcase);
