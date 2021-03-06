load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.16-8-12
description: >
    Array.prototype.every doesn't mutate the array on which it is
    called on
---*/

  function callbackfn(val, idx, obj)
  {
    return true;
  }
  var arr = [1,2,3,4,5];
  arr.every(callbackfn);

assert.sameValue(arr[0], 1, 'arr[0]');
assert.sameValue(arr[1], 2, 'arr[1]');
assert.sameValue(arr[2], 3, 'arr[2]');
assert.sameValue(arr[3], 4, 'arr[3]');
assert.sameValue(arr[4], 5, 'arr[4]');
