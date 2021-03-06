load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: ToObject conversion from undefined value must throw TypeError
es5id: 12.10-2-4
description: Trying to convert undefined to Object
flags: [noStrict]
---*/

try{
  with(undefined) x = 2;
  $ERROR('#2.1: with(undefined) x = 2 must throw TypeError. Actual: x === ' + (x));
}
catch(e){
  if((e instanceof TypeError) !== true){
    $ERROR('#2.2: with(undefined) x = 2 must throw TypeError. Actual: ' + (e));
  }
}
