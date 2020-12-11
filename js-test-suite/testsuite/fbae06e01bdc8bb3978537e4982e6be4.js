load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 10.2.1.1.3-4-22-s
description: >
    Strict Mode - TypeError is not thrown when changing the value of
    the Constructor Properties of the Global Object under strict mode
    (Object)
flags: [onlyStrict]
---*/

        var objBak = Object;

        try {
            Object = 12;
        } finally {
            Object = objBak;
        }
