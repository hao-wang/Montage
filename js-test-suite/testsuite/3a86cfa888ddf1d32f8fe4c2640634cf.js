load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 7.6.1-6-7
description: >
    Allow reserved words as property names by dot operator assignment,
    accessed via indexing: while, debugger, function
---*/

        var tokenCodes  = {};
        tokenCodes.while = 0; 
        tokenCodes.debugger = 1;
        tokenCodes.function = 2; 
        var arr = [
            'while' ,
            'debugger', 
            'function'
         ];
         for (var i = 0; i < arr.length; i++) {
            assert.sameValue(tokenCodes[arr[i]], i, 'tokenCodes[arr[i]]');
        }
