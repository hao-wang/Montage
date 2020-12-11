load("e2371540d876710daf38e749390aa2a3.js");
//@ skip

function testFunction(a, b)
{
    "use strict"
    result |= 0;
    result += a * 1000 + b * 100 + arguments[2] * 10 + arguments.length ^ (result & 1024);
}

var arrayArguments = [2, 3, 4]
var result = 0;
for (var i = 0; i < 50000; i++)
    new testFunction(...arrayArguments);

for (var i = 0; i < 50000; i++)
    new testFunction(...[1, 2, result, 4]);

function test2() {
    for (var i = 0; i < 50000; i++)
        new testFunction(...arguments);
}

test2(1,2,3,4)


function test3() {
    aliasedArguments = arguments;
    for (var i = 0; i < 50000; i++)
        new testFunction(...aliasedArguments);
}

test3(1,2,result,4)

if (result != 2642352784)
    throw "Result was " + result + " expected 2642352784";

load("cf1a0efae1078faee510f7bda78d4902.js");
