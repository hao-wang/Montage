load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: String.prototype.slice (start, end)
es5id: 15.5.4.13_A1_T5
description: >
    Arguments are null and call other slice(start, end), and instance
    is function object, that have overrided valueOf and toString
    functions
---*/

__func.valueOf=function(){return "gnulluna"};
__func.toString=function(){return __func;};

Function.prototype.slice=String.prototype.slice;


//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__func.slice(null, Function().slice(__func,5).length) !== "gnull") {
  $ERROR('#1: __func.slice(null, Function().slice(__func,5).length) === "gnull". Actual: '+__func.slice(null, Function().slice(__func,5).length) );
}
//
//////////////////////////////////////////////////////////////////////////////

function __func(){};
