load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.22-9-2
description: >
    Array.prototype.reduceRight considers new value of elements in
    array after it is called
---*/

  function callbackfn(prevVal, curVal, idx, obj)
  {
    arr[3] = -2;
    arr[0] = -1;
    return prevVal + curVal;
  }

  var arr = [1,2,3,4,5];

assert.sameValue(arr.reduceRight(callbackfn), 13, 'arr.reduceRight(callbackfn)');
