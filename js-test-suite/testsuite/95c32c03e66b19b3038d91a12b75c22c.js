load("8b38e12cab5de21ec5393724c0d9b7dd.js");
//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Number tests

if (this.WScript && this.WScript.LoadScriptFile)
{ // Check for running in ch
    this.WScript.LoadScriptFile("dc12371bf414696a113c371a90d0997a.js");
}

var tests = 
[
    {
        name: "Assignment to a property on a number without a setter in sloppy mode should be ignored",
        body: function ()
        {
            var one = 1;
            one.a = 12;
            assert.areEqual(undefined, one.a);
        }
    },
    {
        name: "Assignment to a property on a number without a setter in strict mode should throw an error",
        body: function ()
        {
            var one = 1;
            assert.throws(function() { "use strict"; one.a = 1; }, TypeError, "Assigning to a property of a number should throw a TypeError.", "Assignment to read-only properties is not allowed in strict mode");
        }
    },
    {
        name: "Assignment to a property on a number without a setter in sloppy mode should be ignored",
        body: function ()
        {
            var one = 1;
            one['a'] = 12;
            assert.areEqual(undefined, one.a);
        }
    },
    {
        name: "Assignment to a property on a number without a setter in strict mode should throw an error",
        body: function ()
        {
            var one = 1;
            assert.throws(function() { "use strict"; one['a'] = 1; }, TypeError, "Assigning to a property of a number should throw a TypeError.", "Assignment to read-only properties is not allowed in strict mode");
        }
    },
    {
        name: "Assignment to an index on a number without a setter in sloppy mode should be ignored",
        body: function ()
        {
            var one = 1;
            one[66] = 12;
            assert.areEqual(undefined, one.a);
        }
    },
    {
        name: "Assignment to an index on a number without a setter in strict mode should throw an error",
        body: function ()
        {
            var one = 1;
            assert.throws(function() { "use strict"; one[66] = 1; }, TypeError, "Assigning to a property of a number should throw a TypeError.", "Assignment to read-only properties is not allowed in strict mode");
        }
    },
];

testRunner.runTests(tests, { verbose: WScript.Arguments[0] != "summary" });
