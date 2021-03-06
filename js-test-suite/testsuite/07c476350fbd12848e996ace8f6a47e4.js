load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.5-4-61
description: >
    Object.create - one property in 'Properties' is a String object
    that uses Object's [[Get]] method to access the 'enumerable'
    property (8.10.5 step 3.a)
---*/

        var accessed = false;
        var descObj = new String();

        descObj.enumerable = true;

        var newObj = Object.create({}, {
            prop: descObj 
        });
        for (var property in newObj) {
            if (property === "prop") {
                accessed = true;
            }
        }

assert(accessed, 'accessed !== true');
