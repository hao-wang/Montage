load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * No matter how control leaves the embedded 'Statement', the scope chain is always restored to its former state
 *
 * @path ch12/12.10/S12.10_A3.3_T4.js
 * @description Declaring "with" statement within a function constructor, leading to completion by exception
 * @noStrict
 */

this.p1 = 1;

var result = "result";

var myObj = {
  p1: 'a',
  value: 'myObj_value',
  valueOf : function(){return 'obj_valueOf';}
};

function __FACTORY(){
  with(myObj){
    var p1 = 'x1';
    throw value;
  }
}

try {
  var obj = new __FACTORY();
} catch(e){
  result = p1;
}

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (result !== 1) {
  $ERROR('#1: result === 1. Actual:  result ==='+ result  );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (p1 !== 1) {
  $ERROR('#2: p1 === 1. Actual:  p1 ==='+ p1  );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if (myObj.p1 !== "x1") {
  $ERROR('#3: myObj.p1 === "x1". Actual:  myObj.p1 ==='+ myObj.p1  );
}
//
//////////////////////////////////////////////////////////////////////////////

