load("8b38e12cab5de21ec5393724c0d9b7dd.js");
//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

WScript.SetTimeout(function() {
    WScript.Echo("OK");
}, 10);
WScript.SetTimeout(function() {
    this.is.an.exception = null;
}, 100);
