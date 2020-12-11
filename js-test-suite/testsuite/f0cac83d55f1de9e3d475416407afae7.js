load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 26.1.2
description: >
  Construct with given argumentsList
info: >
  26.1.2 Reflect.construct ( target, argumentsList [, newTarget] )

  ...
  2. If newTarget is not present, let newTarget be target.
  ...
  6. Return Construct(target, args, newTarget).
---*/

function fn() {
  this.args = arguments;
}

var result = Reflect.construct(fn, [42, 'Mike', 'Leo']);

assert.sameValue(result.args.length, 3, 'result.args.length');
assert.sameValue(result.args[0], 42);
assert.sameValue(result.args[1], 'Mike');
assert.sameValue(result.args[2], 'Leo');
