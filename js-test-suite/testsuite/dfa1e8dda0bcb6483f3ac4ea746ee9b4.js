load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 11.8.3-4
description: >
    11.8.3 Less-than-or-equal Operator - Partial left to right order
    enforced when using Less-than-or-equal operator: toString <=
    toString
---*/

        var accessed = false;
        var obj1 = {
            toString: function () {
                accessed = true;
                return 3;
            }
        };
        var obj2 = {
            toString: function () {
                if (accessed === true) {
                    return 4;
                } else {
                    return 2;
                }
            }
        };

assert((obj1 <= obj2), '(obj1 <= obj2) !== true');
