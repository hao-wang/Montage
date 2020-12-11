load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("fec05e691cc28279400c1df89b47a7cf.js");
var BUGNUMBER = 1268138;
var summary = 'Internal usage of split should not be affected by prototpe change';

print(BUGNUMBER + ": " + summary);

function test() {
  var t = 24*60*60*1000;
  var possibleAnswer = ["1.1.1970", "2.1.1970", "3.1.1970"];

  String.prototype[Symbol.split] = function(s, limit) { return [""]; };
  var s = Intl.DateTimeFormat("de", {}).format(t);
  assertEq(possibleAnswer.includes(s), true);

  String.prototype[Symbol.split] = function(s, limit) { return ["x-foo"]; };
  s = Intl.DateTimeFormat("de", {}).format(t);
  assertEq(possibleAnswer.includes(s), true);

  String.prototype[Symbol.split] = function(s, limit) { return ["de-u-co"]; };
  s = Intl.DateTimeFormat("de", {}).format(t);
  assertEq(possibleAnswer.includes(s), true);

  String.prototype[Symbol.split] = function(s, limit) { return ["en-US"]; };
  s = Intl.DateTimeFormat("de", {}).format(t);
  assertEq(possibleAnswer.includes(s), true);
}

if (this.hasOwnProperty("Intl"))
  test();

reportCompare(0, 0, "ok");
