load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: TypeError

var lfLogBuffer = `
function testcase( []  = (function() { return x++; }), get, target, ... f1)  {
        return function () {
        } ( ... 2 || (this)  ? (yield)  : (yield)) ;
    }
`;
lfLogBuffer = lfLogBuffer.split('\n');
var lfCodeBuffer = "";
while (true) {
    var line = lfLogBuffer.shift();
    if (line == null) {
        break;
    } else {
        lfCodeBuffer += line + "\n";
    }
}
if (lfCodeBuffer) loadFile(lfCodeBuffer);
function loadFile(lfVarx) {
    eval(lfVarx);
}
