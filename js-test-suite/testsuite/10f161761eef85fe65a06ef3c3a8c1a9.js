load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-patterns
es6id: 21.2.1
description: >
    ClassEscape does not recognize "class control" patterns
info: |
    ClassEscape[U] ::
        b
        [+U] -
        CharacterClassEscape
        CharacterEscape[?U]

    The `u` flag precludes the Annex B extension that enables this pattern.
negative:
  phase: early
  type: SyntaxError
---*/

/\c0/u;
