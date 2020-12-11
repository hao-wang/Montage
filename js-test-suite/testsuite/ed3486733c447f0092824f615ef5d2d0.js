load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
var BUGNUMBER = 1263851;
var summary = "RegExp.prototype[@@split] should handle if lastIndex is out of bound.";

print(BUGNUMBER + ": " + summary);

var myRegExp = {
    get constructor() {
        return {
            get [Symbol.species]() {
                return function() {
                    return {
                        get lastIndex() {
                            return 9;
                        },
                        set lastIndex(v) {},
                        exec() {
                            return [];
                        }
                    };
                };
            }
        };
    }
};
var result = RegExp.prototype[Symbol.split].call(myRegExp, "abcde");;
assertEq(result.length, 2);
assertEq(result[0], "");
assertEq(result[1], "");

if (typeof reportCompare === "function")
    reportCompare(true, true);
