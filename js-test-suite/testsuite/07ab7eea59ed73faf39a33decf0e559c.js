load("201224b0d1c296b45befd2285e95dd42.js");
// Uncompiled, polymorphic callsite for |new|.

function Foo(prop) {
	this.name = "Foo";
	this.prop = prop;
}

function f() {
	// Enter OSR here.
	for (var i = 0; i < 100; i++) 
	{ }

	// No type information below this point.
	var x = new Foo("cats");
	return x;
}

assertEq(f().prop, "cats");
