load("201224b0d1c296b45befd2285e95dd42.js");
actual = '';
expected = '0 0 1 1 2 2 3 3,0 0 1 1 2 2 3 3,0 0 1 1 2 2 3 3,0 0 1 1 2 2 3 3,0 0 1 1 2 2 3 3,1 2 2 3 3 4 4 5,1 2 2 3 3 4 4 5,1 2 2 3 3 4 4 5,1 2 2 3 3 4 4 5,1 2 2 3 3 4 4 5,2 4 3 5 4 6 5 7,2 4 3 5 4 6 5 7,2 4 3 5 4 6 5 7,2 4 3 5 4 6 5 7,2 4 3 5 4 6 5 7,3 6 4 7 5 8 6 9,3 6 4 7 5 8 6 9,3 6 4 7 5 8 6 9,3 6 4 7 5 8 6 9,3 6 4 7 5 8 6 9,4 8 5 9 6 10 7 11,4 8 5 9 6 10 7 11,4 8 5 9 6 10 7 11,4 8 5 9 6 10 7 11,4 8 5 9 6 10 7 11,';

function f(a, b) {
  function g(x, y) {
    function h(m, n) {
      function k(u, v) {
	for (var i = 0; i < 5; ++i) {
	  appendToActual(a + ' ' + b + ' ' + x + ' ' + y + ' ' + m + ' ' + n + ' ' + u + ' ' + v);
	}
      }
      k(m+1, n+1);
    }
    h(x+1, y+1);
  }
  g(a+1, b+1);
}

for (var i = 0; i < 5; ++i) {
  f(i, i+i);
}


assertEq(actual, expected)
