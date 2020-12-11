load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.20-5-4
description: >
    Array.prototype.filter - thisArg is object from object
    template(prototype)
---*/

  var res = false;
  function callbackfn(val, idx, obj)
  {
    return this.res;
  }
  
  function foo(){}
  foo.prototype.res = true;
  var f = new foo();

  var srcArr = [1];
  var resArr = srcArr.filter(callbackfn,f);

assert.sameValue(resArr.length, 1, 'resArr.length');
