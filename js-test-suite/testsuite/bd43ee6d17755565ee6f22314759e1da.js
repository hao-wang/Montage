load("7fe0f1bf313bbf91780e927100d557ab.js");
// Copyright 2013 the V8 project authors. All rights reserved.
// Copyright (C) 2005, 2006, 2007, 2008, 2009 Apple Inc. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions
// are met:
// 1.  Redistributions of source code must retain the above copyright
//     notice, this list of conditions and the following disclaimer.
// 2.  Redistributions in binary form must reproduce the above copyright
//     notice, this list of conditions and the following disclaimer in the
//     documentation and/or other materials provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY APPLE INC. AND ITS CONTRIBUTORS ``AS IS'' AND ANY
// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
// WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
// DISCLAIMED. IN NO EVENT SHALL APPLE INC. OR ITS CONTRIBUTORS BE LIABLE FOR ANY
// DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
// (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
// LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
// ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
// SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

description("KDE JS Test");
var b = new Boolean();
b.x = 11;

with (b) {
  f = function(a) { return a*x; } // remember scope chain
}

shouldBe("f(2)", "22");

var OBJECT = new MyObject( "hello" );
function MyObject(value) {
    this.value = value;
    this.toString = new Function( "return this.value+''" );
    return this;
}
shouldBe("OBJECT.toString()", "'hello'");
var s;
with (OBJECT) {
    s = toString();
}
shouldBe("s", "'hello'");


// Make sure that for ... in reevaluates the scoping every time!
P = { foo : 1, bar : 2, baz : 3 }

function testForIn() {
   for (g in P) {
        eval("var g;") //Change the scope of g half-ways through the loop
   }
}

testForIn();
shouldBe("g", "'foo'"); //Before the eval, g was in outer scope, but not after!

load("38c2440fa6e26a16772c012d32bc007f.js");