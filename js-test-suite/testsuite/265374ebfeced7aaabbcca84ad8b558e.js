load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| need-for-each

(function() {
  try {
    (eval("\
      function() {\
        for each(let y in [0]) {\
          for (var a = 0; a < 9; ++a) {\
            if (a) {\
              this.__defineGetter__(\"\",this)\
            }\
          }\
        }\
      }\
    "))()
  } catch(e) {}
})()

/* Don't assert. */

