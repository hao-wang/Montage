load("201224b0d1c296b45befd2285e95dd42.js");
// Binary: cache/js-dbg-32-2ee92d697741-linux
// Flags: -m
//
function f(foo) {
    foo.replace(/s/, "")
    Function(foo)()
}
for (a = 0; a < 1000; a++) {
    f("\
      for (var b = 0; b < 7; b++) {\
        gczeal(2)\
      }\
    ")
}
