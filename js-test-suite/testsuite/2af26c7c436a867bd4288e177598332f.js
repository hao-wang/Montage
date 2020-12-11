load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * For each VariableDeclaration or VariableDeclarationNoIn in the
 * code, create a property of the variable object whose name is the Identifier
 * in the VariableDeclaration or VariableDeclarationNoIn, whose value is
 * undefined and whose attributes are determined by the type of code
 *
 * @path ch10/10.2/10.2.1/S10.2.1_A5.1_T2.js
 * @description Checking existence of the variable object property with formal parameter
 */

//CHECK#1
function f1(x){
  var x;
  
  return typeof x;
}

if(!(f1() === "undefined")){
  $PRINT('#1: f1(1) === "undefined"');
}

//CHECK#2
function f2(x){
  var x;
  
  return x;
}

if(!(f2() === undefined)){
  $PRINT('#1: f2(1) === undefined');
}

