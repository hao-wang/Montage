load("201224b0d1c296b45befd2285e95dd42.js");
if (!('oomTest' in this))
    quit();

oomTest(function() {
    m = parseModule(`while (x && NaN) prototype; let x`);
    m.declarationInstantiation();
    m.evaluation();
})