load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 21.1.3.7
description: >
  Returns true if searchString appears as a substring of the given string with a
  given position.
info: >
  21.1.3.7 String.prototype.includes ( searchString [ , position ] )

  ...
  11. Let len be the number of elements in S.
  12. Let start be min(max(pos, 0), len).
  13. Let searchLen be the number of elements in searchStr.
  14. If there exists any integer k not smaller than start such that k +
  searchLen is not greater than len, and for all nonnegative integers j less
  than searchLen, the code unit at index k+j of S is the same as the code unit
  at index j of searchStr, return true; but if there is no such integer k,
  return false.
  ...
---*/

var str = 'The future is cool!';

assert(
  str.includes('The future', 0),
  'Returns true for str.includes("The future", 0)'
);
assert(str.includes(' is ', 1), 'Returns true for str.includes(" is ", 1)');
assert(str.includes('cool!', 10), 'Returns true for str.includes("cool!", 10)');