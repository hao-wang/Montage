load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| need-for-each

// Binary: cache/js-dbg-64-54700fad8cf9-linux
// Flags: -j
//
this.__defineSetter__("x", Object.freeze)
x = this;
for (let z = 0; z < 5; z++) {
    for each(let y in [0, 0, 0]) {
        print(u = "")
    }
}
