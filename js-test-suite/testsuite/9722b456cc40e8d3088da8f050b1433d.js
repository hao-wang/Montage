load("8b38e12cab5de21ec5393724c0d9b7dd.js");
function XLFuzzTest() {
  try {
    do {
      function apInitTest() {
        do {
          function apEndTest() {
            do {
              apInitTest:
                if (false) {
                  return;
                }
              return;
            } while (false);
          }
        } while (false);
      }
    } while (false);
  } catch (e) {}
}
for (var i = 0; i < 1; i++) {
  XLFuzzTest();
}
print("PASSED");
