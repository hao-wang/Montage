load("8b38e12cab5de21ec5393724c0d9b7dd.js");
//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function test()
{
    var i = 0;
    function f1()
    {
        if (i == 0)
        {
            i++;
            return f1();
        }
        return i;
    }
    return f1;
}

WScript.Echo((test())());
WScript.Echo((test())());

