load("8b38e12cab5de21ec5393724c0d9b7dd.js");
//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function func(i)
{
    var a = 3;
    var b;

    if (i)
    {
        a = 4;
        b = a + i;
    }
    else
    {
        b = a + i;
    }
    return b;
}


WScript.Echo(func(true));
WScript.Echo(func(false));
