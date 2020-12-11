load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.14-9-1
description: Array.prototype.indexOf must return correct index (boolean)
---*/

  var obj = {toString:function (){return true}};
  var _false = false;
  var a = [obj,"true", undefined,0,_false,null,1,"str",0,1,true,false,true,false];

  assert.sameValue(a.indexOf(true), 10, 'a[10]=true');
  assert.sameValue(a.indexOf(false), 4, 'a[4] =_false');