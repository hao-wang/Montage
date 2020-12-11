load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.5-4-249
description: >
    Object.create - one property in 'Properties' is a Date object that
    uses Object's [[Get]] method to access the 'get' property (8.10.5
    step 7.a)
---*/

        var dateObj = new Date();

        dateObj.get = function () {
            return "VerifyDateObject";
        };

        var newObj = Object.create({}, {
            prop: dateObj 
        });

assert.sameValue(newObj.prop, "VerifyDateObject", 'newObj.prop');
