load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-pattern-semantics
es6id: 21.2.2
description: Out-of-bounds decimal escapes
info: |
    1. Evaluate DecimalEscape to obtain an integer n.
    2. If n>NcapturingParens, throw a SyntaxError exception.

    When the "unicode" flag is set, this algorithm is honored irrespective of
    the presence of Annex B extensions.
negative:
  phase: early
  type: SyntaxError
---*/

/\8/u;
