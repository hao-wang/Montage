load("201224b0d1c296b45befd2285e95dd42.js");
this.x1 = 'y';
// evalcx is like evaluate and not eval, and so can introduce a global let binding.
evalcx("let x1 = 'z';", this);
assertEq(x1, 'z');
