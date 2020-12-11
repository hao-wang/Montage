load("8b38e12cab5de21ec5393724c0d9b7dd.js");
//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft Corporation and contributors. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var mod = new WebAssembly.Module(readbuffer('unreachable.wasm'));
var a = new WebAssembly.Instance(mod).exports;

try {
    a.test_unreachable();
    print("FAILED");
} 
catch(e) {
    print(e.message.includes("Unreachable") ? "PASSED" : "FAILED");
}

