load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.22-9-c-ii-3
description: Array.prototype.reduceRight - callbackfn takes 4 arguments
---*/

  var bCalled = false;
  function callbackfn(prevVal, curVal, idx, obj)
  { 
    bCalled = true;
    if(prevVal === true && arguments.length === 4)   
      return true;
    else
      return false;
  }
  var arr = [0,1,2,3,4,5,6,7,8,9];

assert.sameValue(arr.reduceRight(callbackfn,true), true, 'arr.reduceRight(callbackfn,true)');
assert.sameValue(bCalled, true, 'bCalled');
