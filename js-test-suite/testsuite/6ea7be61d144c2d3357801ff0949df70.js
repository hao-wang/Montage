load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Arguments : (ArgumentList : ArgumentList, AssignmentExpression)
 *
 * @path ch11/11.2/11.2.4/S11.2.4_A1.4_T1.js
 * @description Return an internal list whose length is one greater than the
 * length of ArgumentList and whose items are the items of ArgumentList, in order,
 * followed at the end by GetValue(AssignmentExpression), which is the last item of
 * the new list
 */

function f_arg() {
}

//CHECK#1
f_arg(x=1,x);

