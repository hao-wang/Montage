load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: SyntaxError

function crashMe2(n) {
    var nasty = [],
        fn
    while (n--) nasty[n] = "a" + 1234567890
    fn = Function(nasty.join(), "void 0")
}
crashMe2(0x10000);