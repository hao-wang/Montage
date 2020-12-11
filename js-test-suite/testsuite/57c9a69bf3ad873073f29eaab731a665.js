load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 13.3.3
description: >
  The ObjectBindingPattern with a simple property list and single name binding
info: >
  Destructuring Binding Patterns - Syntax

  ObjectBindingPattern[Yield] :
    { }
    { BindingPropertyList[?Yield] }
    { BindingPropertyList[?Yield] , }

  BindingPropertyList[Yield] :
    BindingProperty[?Yield]
    BindingPropertyList[?Yield] , BindingProperty[?Yield]

  BindingProperty[Yield] :
    SingleNameBinding[?Yield]
    PropertyName[?Yield] : BindingElement[?Yield]

  SingleNameBinding[Yield] :
    BindingIdentifier[?Yield] Initializer[In, ?Yield]opt

---*/

function fna({x}) {}
function fnb({x, y}) {}
function fnc({x = 42}) {}
function fnd({x, y = 42}) {}