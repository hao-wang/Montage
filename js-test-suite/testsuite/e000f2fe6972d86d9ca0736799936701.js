load("8b38e12cab5de21ec5393724c0d9b7dd.js");
//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Tests that let/const variables appear properly as part of an
// eval() call.
function blockScopeEvalTestFunc() {
    eval("{ let b = 1; b++; /**bp:locals()**/ }");
    return 0;
}
blockScopeEvalTestFunc();
WScript.Echo("PASSED");
