load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Using "try" with "catch" or "finally" statement within/without a "while" statement
 *
 * @path ch12/12.14/S12.14_A10_T5.js
 * @description Throw some exceptions from different place of loop body
 */

// CHECK#1
var c=0, i=0;
var fin=0;
while(i<10){
  i+=1;
  try{
    if(c===0){
      throw "ex1";
      $ERROR('#1.1: throw "ex1" lead to throwing exception');
    }
    c+=2;
    if(c===1){
      throw "ex2";
      $ERROR('#1.2: throw "ex2" lead to throwing exception');
    }
  }
  catch(er1){
    c-=1;
    continue;
    $ERROR('#1.3: "try catch{continue} finally" must work correctly');
  }
  finally{
    fin+=1;
  }
}
if(fin!==10){
  $ERROR('#1.4: "finally" block must be evaluated');
}

