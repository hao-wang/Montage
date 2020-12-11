load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-performeval
description: >
  A direct eval in the functon code of a non-ArrowFunction may not contain
  SuperCall
info: |
  [...]
  4. Let inMethod be false.
  5. Let inConstructor be false.
  6. If thisEnvRec has a [[HomeObject]] field, then
     a. Let inMethod be true.
     b. If thisEnvRec.[[FunctionObject]] has a [[Construct]] field, let
        inConstructor be true.
  7. Let script be the ECMAScript code that is the result of parsing x,
     interpreted as UTF-16 encoded Unicode text as described in 6.1.4, for the
     goal symbol Script. If inMethod is false, additional early error rules
     from 18.2.1.1.1 are applied. If inConstructor is false, additional early
     error rules from 18.2.1.1.2 are applied. If the parse fails, throw a
     SyntaxError exception. If any early errors are detected, throw a
     SyntaxError or a ReferenceError exception, depending on the type of the
     error (but see also clause 16). Parsing and early error detection may be
     interweaved in an implementation dependent manner.

   18.2.1.1.1 Additional Early Error Rules for Eval Outside Methods

   ScriptBody : StatementList

   - It is a Syntax Error if StatementList contains super.
features: [super]
---*/

var executed = false;
function f() {
  eval('executed = true; super();');
}

assert.throws(SyntaxError, function() {
  f();
});

assert.sameValue(executed, false);
