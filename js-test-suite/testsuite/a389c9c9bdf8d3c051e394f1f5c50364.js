load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Every execution context has associated with it a scope chain.
 * A scope chain is a list of objects that are searched when evaluating an
 * Identifier
 *
 * @path ch10/10.2/10.2.2/S10.2.2_A1_T4.js
 * @description Checking scope chain containing function declarations
 */

var x = 0;

function f1(){
  function f2(){
    return x;
  };

  var x = 1;
  return f2();
}

if(!(f1() === 1)){
  $ERROR("#1: Scope chain disturbed");
}

