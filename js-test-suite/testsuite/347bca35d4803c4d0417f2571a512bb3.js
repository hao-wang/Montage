load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    "break" within a "while" Statement is allowed and performed as described
    in 12.8
es5id: 12.6.2_A4_T1
description: "\"break\" within a \"while\" Statement"
---*/

var __in__do__before__break, __in__do__after__break;

while(1===1){
    __in__do__before__break="reached"; 
    break;
     __in__do__after__break="where am i";
}

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__in__do__before__break !== "reached") {
	$ERROR('#1: __in__do__before__break === "reached". Actual:  __in__do__before__break ==='+ __in__do__before__break  );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (typeof __in__do__after__break !== "undefined") {
	$ERROR('#2: typeof __in__do__after__break === "undefined". Actual:  typeof __in__do__after__break ==='+ typeof __in__do__after__break  );
}
//
//////////////////////////////////////////////////////////////////////////////
