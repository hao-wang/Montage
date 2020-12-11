load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 23.1.3.3
description: >
  Returns true when deletes an entry.
info: >
  Map.prototype.delete ( key )

  4. Let entries be the List that is the value of M’s [[MapData]] internal slot.
  5. Repeat for each Record {[[key]], [[value]]} p that is an element of entries,
    a. If p.[[key]] is not empty and SameValueZero(p.[[key]], key) is true, then
      i. Set p.[[key]] to empty.
      ii. Set p.[[value]] to empty.
      iii. Return true.
  ...
---*/

var m = new Map([['a',1], ['b', 2]]);

var result = m.delete('a');

assert(result);
assert.sameValue(m.size, 1);
