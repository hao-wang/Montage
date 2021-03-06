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

description(
'This is a test case for <a https://bugs.webkit.org/show_bug.cgi?id=64678">bug 64678</a>.'
);

//ES 5.1 allows for Object.prototype.toString being called with undefined/null.
shouldBe("Object.prototype.toString.call(undefined)", '"[object Undefined]"');
shouldBe("Object.prototype.toString.call(null)", '"[object Null]"');

// These calls pass undefined as this value, and as such should throw in toObject.
shouldThrow("Object.prototype.toLocaleString.call(undefined)");
shouldThrow("Object.prototype.valueOf.call(undefined)");
shouldThrow("Object.prototype.hasOwnProperty.call(undefined, 'hasOwnProperty')");
shouldThrow("Object.prototype.propertyIsEnumerable.call(undefined, 'propertyIsEnumerable')");
shouldThrow("Object.prototype.isPrototypeOf.call(undefined, this)");

load("38c2440fa6e26a16772c012d32bc007f.js");
