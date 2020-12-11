load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.19-8-3
description: >
    Array.prototype.map doesn't visit deleted elements in array after
    the call
---*/

  function callbackfn(val, idx, obj)
  {
    delete srcArr[4];
    if(val > 0)
      return 1;
    else
      return 0;

  }

  var srcArr = [1,2,3,4,5];
  var resArr = srcArr.map(callbackfn);

assert.sameValue(resArr.length, 5, 'resArr.length');
assert.sameValue(resArr[4], undefined, 'resArr[4]');
