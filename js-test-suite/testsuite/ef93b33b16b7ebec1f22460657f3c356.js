load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.3.4.5.2-4-7
description: >
    [[Construct]] - length of parameters of 'target' is 0, length of
    'boundArgs' is 0, length of 'ExtraArgs' is 1
---*/

        var func = function () {
            return new Boolean(arguments.length === 1 && arguments[0] === 1);
        };

        var NewFunc = Function.prototype.bind.call(func, {});

        var newInstance = new NewFunc(1);

assert.sameValue(newInstance.valueOf(), true, 'newInstance.valueOf()');
