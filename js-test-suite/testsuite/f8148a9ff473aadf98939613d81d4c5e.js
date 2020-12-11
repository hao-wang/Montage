load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("352fc54052b657308832185e13cd17c9.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-typedarray-typedarray
description: >
  Use prototype from new target if it's an Object
info: >
  22.2.4.3 TypedArray ( typedArray )

  This description applies only if the TypedArray function is called with at
  least one argument and the Type of the first argument is Object and that
  object has a [[TypedArrayName]] internal slot.

  ...
  4. Let O be ? AllocateTypedArray(constructorName, NewTarget,
  %TypedArrayPrototype%).
  ...

  22.2.4.2.1 Runtime Semantics: AllocateTypedArray (constructorName, newTarget,
  defaultProto [ , length ])

  1. Let proto be ? GetPrototypeFromConstructor(newTarget, defaultProto).
  2. Let obj be IntegerIndexedObjectCreate (proto, «[[ViewedArrayBuffer]],
  [[TypedArrayName]], [[ByteLength]], [[ByteOffset]], [[ArrayLength]]» ).
  ...

  9.4.5.7 IntegerIndexedObjectCreate (prototype, internalSlotsList)

  ...
  10. Set the [[Prototype]] internal slot of A to prototype.
  ...
  12. Return A.
features: [Reflect]
includes: [testTypedArray.js]
---*/

function newTarget() {}
var proto = {};
newTarget.prototype = proto;

var sample = new Int8Array(8);

testWithTypedArrayConstructors(function(TA) {
  var ta = Reflect.construct(TA, [sample], newTarget);

  assert.sameValue(ta.constructor, Object);
  assert.sameValue(Object.getPrototypeOf(ta), proto);
});