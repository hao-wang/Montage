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
'This test checks for a regression against <a href="rdar://problem/4161606">JavaScript regular expressions with certain ranges of Unicode characters cause a crash</a>. If it fails, it may crash.'
);


// test ranges reported in bug
shouldBe('new RegExp("[\u00c0-\u1f4d]").toString()', '/[\u00c0-\u1f4d]/.toString()');
shouldBe('new RegExp("[\u3041-\u3094]").toString()', '/[\u3041-\u3094]/.toString()');
shouldBe('new RegExp("[\u4d00-\u4db5]").toString()', '/[\u4d00-\u4db5]/.toString()');
shouldBe('new RegExp("[\u4e00-\u9fa5]").toString()', '/[\u4e00-\u9fa5]/.toString()');

// test first char < 255, last char > 255
shouldBe('new RegExp("[\u0001-\u1f4d]").toString()', '/[\u0001-\u1f4d]/.toString()');

load("38c2440fa6e26a16772c012d32bc007f.js");
