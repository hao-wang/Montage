load("8e10ed2ef8d5793457c2d22533e5ff15.js");
// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

InspectorTest.addScript(
`function testFunction()
{
  function foo()
  {
    try {
      throw new Error();
    } catch (e) {
    }
  }
  debugger;
  foo();
  console.log("completed");
}`);

Protocol.Debugger.enable();
Protocol.Runtime.enable();
step1();

function step1()
{
  Protocol.Runtime.evaluate({ "expression": "setTimeout(testFunction, 0);"});
  var commands = [ "Print", "stepOver", "stepOver", "Print", "resume" ];
  Protocol.Debugger.onPaused(function(messageObject)
  {
    var command = commands.shift();
    if (command === "Print") {
      var callFrames = messageObject.params.callFrames;
      for (var callFrame of callFrames)
        InspectorTest.log(callFrame.functionName + ":" + callFrame.location.lineNumber);
      command = commands.shift();
    }
    if (command)
      Protocol.Debugger[command]();
  });

  Protocol.Runtime.onConsoleAPICalled(function(messageObject)
  {
    if (messageObject.params.args[0].value === "completed") {
      if (commands.length)
        InspectorTest.log("[FAIL]: execution was resumed too earlier.")
      step2();
    }
  });
}

function step2()
{
  Protocol.Runtime.evaluate({ "expression": "setTimeout(testFunction, 0);"});
  var commands = [ "Print", "stepOver", "stepInto", "stepOver", "stepOver", "Print", "resume" ];
  Protocol.Debugger.onPaused(function(messageObject)
  {
    var command = commands.shift();
    if (command === "Print") {
      var callFrames = messageObject.params.callFrames;
      for (var callFrame of callFrames)
        InspectorTest.log(callFrame.functionName + ":" + callFrame.location.lineNumber);
      command = commands.shift();
    }
    if (command)
      Protocol.Debugger[command]();
  });

  Protocol.Runtime.onConsoleAPICalled(function(messageObject)
  {
    if (messageObject.params.args[0].value === "completed") {
      if (commands.length)
        InspectorTest.log("[FAIL]: execution was resumed too earlier.")
      InspectorTest.completeTest();
    }
  });
}

