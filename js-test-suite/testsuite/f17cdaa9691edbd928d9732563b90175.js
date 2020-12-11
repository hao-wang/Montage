load("8e10ed2ef8d5793457c2d22533e5ff15.js");
// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

print("Test that descriptions for arrays, maps, and sets include the correct length or size.")

Promise.all([
  testExpression("new Set()"),
  testExpression("new Set([1,2])"),
  testExpression("new Map()"),
  testExpression("new Map([[1,2],[3,4]])"),
  testExpression("new Array()"),
  testExpression("new Array(2)"),
  testExpression("new Uint8Array()"),
  testExpression("new Uint8Array(2)")
]).then(() => InspectorTest.completeTest());

function testExpression(expression) {
  return Protocol.Runtime.evaluate({ expression: expression })
            .then(result => InspectorTest.logMessage(result.result.result.description))
            .then(() => Protocol.Runtime.evaluate({ expression: "[" + expression + "]", generatePreview: true }))
            .then(result => InspectorTest.logMessage(result.result.result.preview.properties[0].value))
}

