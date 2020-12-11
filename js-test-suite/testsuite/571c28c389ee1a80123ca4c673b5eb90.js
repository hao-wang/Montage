load("8e10ed2ef8d5793457c2d22533e5ff15.js");
// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

print('Checks async instrumentation enabled in the middle.');

InspectorTest.addScript(`
function foo() {
  // asyncTaskStarted
  debugger;
  // asyncTaskFinished
  debugger;
}

function test() {
  debugger;
  var resolve1;
  var p1 = new Promise(resolve => resolve1 = resolve);
  var p2 = p1.then(foo);
  resolve1(); // asyncTaskScheduled
  debugger;
  return p2;
}

//# sourceURL=test.js`, 7, 26);

InspectorTest.setupScriptMap();
Protocol.Debugger.onPaused(message => {
  if (enableOnPause-- === 0)
    Protocol.Debugger.setAsyncCallStackDepth({ maxDepth: 128 });
  InspectorTest.logCallFrames(message.params.callFrames);
  var asyncStackTrace = message.params.asyncStackTrace;
  while (asyncStackTrace) {
    InspectorTest.log(`-- ${asyncStackTrace.description} --`);
    InspectorTest.logCallFrames(asyncStackTrace.callFrames);
    asyncStackTrace = asyncStackTrace.parent;
  }
  InspectorTest.log('');
  Protocol.Debugger.resume();
});

Protocol.Debugger.enable();
var enableOnPause = 0;
InspectorTest.runTestSuite([
  function beforeAsyncTaskScheduled(next) {
    enableOnPause = 0;
    Protocol.Runtime.evaluate({ expression: 'test()//# sourceURL=expr1.js',
        awaitPromise: true })
      .then(() => Protocol.Debugger.setAsyncCallStackDepth({ maxDepth: 0 }))
      .then(next);
  },

  function afterAsyncTaskScheduled(next) {
    enableOnPause = 2;
    Protocol.Runtime.evaluate({ expression: 'test()//# sourceURL=expr1.js',
        awaitPromise: true })
      .then(() => Protocol.Debugger.setAsyncCallStackDepth({ maxDepth: 0 }))
      .then(next);
  },

  function afterAsyncTaskStarted(next) {
    enableOnPause = 3;
    Protocol.Runtime.evaluate({ expression: 'test()//# sourceURL=expr1.js',
        awaitPromise: true })
      .then(() => Protocol.Debugger.setAsyncCallStackDepth({ maxDepth: 0 }))
      .then(next);
  }
]);

