load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The production IterationStatement: "for (var VariableDeclarationNoIn in Expression) Statement"
 *
 * @path ch12/12.6/12.6.4/S12.6.4_A4.js
 * @description Using Object as an Expression is appropriate. Eval is used
 */

__str="";

__evaluated = eval("for(ind in (hash={2:'b',1:'a',4:'d',3:'c'}))__str+=hash[ind]");

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if ( !( (__evaluated.indexOf("a")!==-1)& (__evaluated.indexOf("b")!==-1)& (__evaluated.indexOf("c")!==-1)&(__evaluated.indexOf("d")!==-1) ) ) {
	$ERROR('#1: (__evaluated.indexOf("a")!==-1)& (__evaluated.indexOf("b")!==-1)& (__evaluated.indexOf("c")!==-1)&(__evaluated.indexOf("d")!==-1)');
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__str !== __evaluated) {
	$ERROR('#2: __str === __evaluated. Actual:  __str ==='+ __str  );
}
//
//////////////////////////////////////////////////////////////////////////////





