load("8b38e12cab5de21ec5393724c0d9b7dd.js");
//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(v) { WScript.Echo(v + ""); }

function foo() {}

var all = [ undefined, null,
            true, false, new Boolean(true), new Boolean(false),
            NaN, +0, -0, 0, 1, 10.0, 10.1, 
            Number.MAX_VALUE, Number.MIN_VALUE, Number.NaN, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY,
            new Number(NaN), new Number(+0), new Number( -0), new Number(0), new Number(1),
            new Number(10.0), new Number(10.1), 
            new Number(Number.MAX_VALUE), new Number(Number.MIN_VALUE), new Number(Number.NaN), 
            new Number(Number.POSITIVE_INFINITY), new Number(Number.NEGATIVE_INFINITY),
            "", "hello", "hel" + "lo",
            new String(""), new String("hello"), new String("he" + "llo"),
            new Object(), [1,2,3], new Object(), [1,2,3] , foo
          ];

for (var i=0; i<all.length; ++i) {
    for (var j=0; j<all.length; ++j) {
        write("a["+i+"](" + all[i] +") + a["+j+"]("+all[j]+") = " + (all[i] + all[j]));
    }
}