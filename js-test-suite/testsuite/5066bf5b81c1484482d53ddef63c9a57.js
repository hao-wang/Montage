load("8b38e12cab5de21ec5393724c0d9b7dd.js");
//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function test()
{
    var simple_escape = function()
    {
        return "simple_escape";
    }
    throw simple_escape;
}


function runtest()
{
    try
    {
        test();
    }
    catch (e)
    {
        return e;
    }
};

WScript.Echo((runtest())());
WScript.Echo((runtest())());

