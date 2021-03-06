load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: lastIndex is not accessed when global and sticky are unset.
es6id: 21.2.5.2.2
info: >
    21.2.5.2.2 Runtime Semantics: RegExpBuiltinExec ( R, S )

    [...]
    4. Let flags be R.[[OriginalFlags]].
    5. If flags contains "g", let global be true, else let global be false.
    [...]
    15. If global is true or sticky is true, then
        a. Perform ? Set(R, "lastIndex", e, true).
---*/

var thrower = {
  valueOf: function() {
    throw new Test262Error();
  }
};

var r = /./;
r.lastIndex = thrower;

var result = r.exec('abc');

assert.notSameValue(result, null);
assert.sameValue(result.length, 1);
assert.sameValue(result[0], 'a');
assert.sameValue(r.lastIndex, thrower);

