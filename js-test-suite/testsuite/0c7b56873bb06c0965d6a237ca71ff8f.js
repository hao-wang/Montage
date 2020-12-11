load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("a78642394624b473718326d9a37d69a7.js");
// Copyright 2012 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 10.1.1_23
description: Tests that the option ignorePunctuation is processed correctly.
author: Norbert Lindenberg
includes: [testIntl.js]
---*/

// the fallback is variant only for usage === sort, but that happens to be the fallback for usage
testOption(Intl.Collator, "ignorePunctuation", "boolean", undefined, false);
