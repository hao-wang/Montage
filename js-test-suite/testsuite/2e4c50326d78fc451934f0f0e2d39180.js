load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: InternalError: too much recursion
function TestCase(n, d, e, a) {
  this.bugnumber = typeof(BUGNUMER) != 'undefined' ? BUGNUMBER : '';
  this.type = (typeof window == 'undefined' ? 'shell' : 'browser');
  gTestcases[gTc++] = this;
  if (optionName) {}
  {} {} {} // Seems to be required to crash
}
function f() {}
function g(n, h) {
    var t = g(TestCase.toSource());
}
g(80, f);