load("e2371540d876710daf38e749390aa2a3.js");
description("Tests that DFG NewArray works when having a bad time.");

Array.prototype.__defineSetter__("100", function() { debug("Ouch!"); });

function foo() { return ["foo", 42, {f:23}]; }

dfgShouldBe(foo, "foo()[0]", "\"foo\"");
dfgShouldBe(foo, "foo()[1]", "42");
dfgShouldBe(foo, "foo()[2].f", "23");


load("cf1a0efae1078faee510f7bda78d4902.js");
