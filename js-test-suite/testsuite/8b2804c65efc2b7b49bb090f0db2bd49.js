load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("cf9772e2024f54f8b1f8a31901aa72c6.js");
class base {}
class derived extends base {
  constructor() {
    try {
      return;
    } catch (e) {
      try {
        return;
      } catch (e) {}
    }
  }
}
assertThrowsInstanceOf(() => new derived, ReferenceError);

if (typeof reportCompare === 'function')
    reportCompare(0,0,"OK");
