load("8e10ed2ef8d5793457c2d22533e5ff15.js");
// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

print("Checks that console.assert works and points to correct call frame.");

InspectorTest.addScript(`
function testFunction() {
  Function.prototype.apply = () => console.error('Should never call this');
  console.assert(true);
  console.assert(false);
  console.assert(false, 1);
  console.assert(false, 1, 2);
  console.assert();
  return console.assert;
}
//# sourceURL=test.js`);

Protocol.Runtime.onConsoleAPICalled(InspectorTest.logMessage);
Protocol.Runtime.enable();
Protocol.Runtime.evaluate({
  expression: "testFunction()//# sourceURL=evaluate.js" })
  .then(InspectorTest.logMessage)
  .then(InspectorTest.completeTest);

