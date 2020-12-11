load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.19-8-4
description: >
    Array.prototype.map doesn't visit deleted elements when
    Array.length is decreased
---*/

  var callCnt = 0;
  function callbackfn(val, idx, obj)
  {
    srcArr.length = 2;
    callCnt++;
    return 1;
  }

  var srcArr = [1,2,3,4,5];
  var resArr = srcArr.map(callbackfn);

assert.sameValue(resArr.length, 5, 'resArr.length');
assert.sameValue(callCnt, 2, 'callCnt');
assert.sameValue(resArr[2], undefined, 'resArr[2]');
