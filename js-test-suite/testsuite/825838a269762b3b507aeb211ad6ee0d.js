load("201224b0d1c296b45befd2285e95dd42.js");
actual = '';
expected = '4,';

function k(f_arg) { 
  for (var i = 0; i < 5; ++i) {
    f_arg(i);
  }
}

function t(x) {
  k(function (i) { x = i; });
  appendToActual(x);
}

t(1);


assertEq(actual, expected)
