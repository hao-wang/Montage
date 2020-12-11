load("8b38e12cab5de21ec5393724c0d9b7dd.js");
//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

let x = "let x";

Object.seal(this);
try {
Object.defineProperty(this, 'x', {value:'20', configurable: true });
}
catch(e) {
    WScript.Echo("exception: " + e);
}
WScript.Echo(x);
WScript.Echo(this.x);
WScript.Echo(Object.isSealed(this));
