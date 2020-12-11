load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Changing property using "eval" statement containing "with" statement
 *
 * @path ch12/12.10/S12.10_A4_T4.js
 * @description Changing object property
 * @noStrict
 */

this.p1 = 'a';
var myObj = {
  p1: {a:"hello"}, 
}
eval("with(myObj){p1={b:'hi'}}");

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if(myObj.p1.a === "hello"){
  $ERROR('#1: myObj.p1.a !== "hello"');
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if(myObj.p1.b !== "hi"){
  $ERROR('#2: myObj.p1.b === "hi". Actual:  myObj.p1.b ==='+ myObj.p1.b  );
}
//
//////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if(myObj.p1 === 'a'){
  $ERROR('#3: myObj.p1 !== \'a\'');
}
//
//////////////////////////////////////////////////////////////////////////////

