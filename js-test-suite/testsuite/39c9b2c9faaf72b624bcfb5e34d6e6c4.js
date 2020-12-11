load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2014 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: Promise.all is resolved with a new empty array
es6id: 25.4.4.1_A2.3_T2
author: Sam Mikes
description: Promise.all([]) returns a Promise for an empty array
flags: [async]
---*/

var arg = [];

Promise.all(arg).then(function (result) {
    if(result.length !== 0) {
        $ERROR("expected an empty array from Promise.all([]), got " + result);
    }
}).then($DONE, $DONE);
