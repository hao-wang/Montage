load("201224b0d1c296b45befd2285e95dd42.js");

function f(a) {
    switch(a) {
        case 3: return 3;
        case 4: return 4;
        default: return -1;
    }
}

assertEq(f(-0.0), -1);
assertEq(f(3.14), -1);
assertEq(f(12.34), -1);

