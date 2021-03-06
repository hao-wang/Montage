load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * If NewExpression or MemberExpression does not implement internal [[Construct]] method, throw TypeError
 *
 * @path ch11/11.2/11.2.2/S11.2.2_A4_T3.js
 * @description Checking String object case
 */

//CHECK#1
try {
  new new String("1");
  $ERROR('#1: new new String("1") throw TypeError');	
}
catch (e) {
  if ((e instanceof TypeError) !== true) {
    $ERROR('#1: new new String("1") throw TypeError');	
  }
}

//CHECK#2
try {
  var x = new String("1");
  new x;
  $ERROR('#2: var x = new String("1"); new x throw TypeError');	
}
catch (e) {
  if ((e instanceof TypeError) !== true) {
    $ERROR('#2: var x = new String("1"); new x throw TypeError');	
  }
}

//CHECK#3
try {
  var x = new String("1");
  new x();
  $ERROR('#3: var x = new String("1"); new x() throw TypeError');  
}
catch (e) {
  if ((e instanceof TypeError) !== true) {
    $ERROR('#3: var x = new String("1"); new x() throw TypeError');  
  }
}


