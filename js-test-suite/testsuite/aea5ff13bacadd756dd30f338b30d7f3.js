load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 7.6.1-5-9
description: >
    Allow reserved words as property names at object initialization,
    accessed via indexing: if, throw, delete
---*/

        var tokenCodes  = { 
            if: 0, 
            throw: 1, 
            delete: 2
        };
        var arr = [
            'if', 
            'throw', 
            'delete'
        ];   
        for (var i = 0; i < arr.length; i++) {
            assert.sameValue(tokenCodes[arr[i]], i, 'tokenCodes[arr[i]]');
        }
