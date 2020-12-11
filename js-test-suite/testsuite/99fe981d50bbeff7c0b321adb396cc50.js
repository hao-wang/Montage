load("8b38e12cab5de21ec5393724c0d9b7dd.js");
//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(v) { WScript.Echo(v + ""); }

function foo() {}

write(undefined & undefined);
write(undefined & null);
write(undefined & true);
write(undefined & false);
write(undefined & Boolean(true));
write(undefined & Boolean(false));
write(undefined & new Boolean(true));
write(undefined & new Boolean(false));
write(undefined & NaN);
write(undefined & +0);
write(undefined & -0);
write(undefined & 0);
write(undefined & 0.0);
write(undefined & -0.0);
write(undefined & +0.0);
write(undefined & 1);
write(undefined & 10);
write(undefined & 10.0);
write(undefined & 10.1);
write(undefined & -1);
write(undefined & -10);
write(undefined & -10.0);
write(undefined & -10.1);
write(undefined & Number.MAX_VALUE);
write(undefined & Number.MIN_VALUE);
write(undefined & Number.NaN);
write(undefined & Number.POSITIVE_INFINITY);
write(undefined & Number.NEGATIVE_INFINITY);
write(undefined & new Number(NaN));
write(undefined & new Number(+0));
write(undefined & new Number(-0));
write(undefined & new Number(0));
write(undefined & new Number(0.0));
write(undefined & new Number(-0.0));
write(undefined & new Number(+0.0));
write(undefined & new Number(1));
write(undefined & new Number(10));
write(undefined & new Number(10.0));
write(undefined & new Number(10.1));
write(undefined & new Number(-1));
write(undefined & new Number(-10));
write(undefined & new Number(-10.0));
write(undefined & new Number(-10.1));
write(undefined & new Number(Number.MAX_VALUE));
write(undefined & new Number(Number.MIN_VALUE));
write(undefined & new Number(Number.NaN));
write(undefined & new Number(Number.POSITIVE_INFINITY));
write(undefined & new Number(Number.NEGATIVE_INFINITY));
write(undefined & '');
write(undefined & 0xa);
write(undefined & 04);
write(undefined & 'hello');
write(undefined & 'hel' + 'lo');
write(undefined & String(''));
write(undefined & String('hello'));
write(undefined & String('h' + 'ello'));
write(undefined & new String(''));
write(undefined & new String('hello'));
write(undefined & new String('he' + 'llo'));
write(undefined & new Object());
write(undefined & new Object());
write(undefined & [1, 2, 3]);
write(undefined & [1 ,2 , 3]);
write(undefined & new Array(3));
write(undefined & Array(3));
write(undefined & new Array(1 ,2 ,3));
write(undefined & Array(1));
write(undefined & foo);
write(null & undefined);
write(null & null);
write(null & true);
write(null & false);
write(null & Boolean(true));
write(null & Boolean(false));
write(null & new Boolean(true));
write(null & new Boolean(false));
write(null & NaN);
write(null & +0);
write(null & -0);
write(null & 0);
write(null & 0.0);
write(null & -0.0);
write(null & +0.0);
write(null & 1);
write(null & 10);
write(null & 10.0);
write(null & 10.1);
write(null & -1);
write(null & -10);
write(null & -10.0);
write(null & -10.1);
write(null & Number.MAX_VALUE);
write(null & Number.MIN_VALUE);
write(null & Number.NaN);
write(null & Number.POSITIVE_INFINITY);
write(null & Number.NEGATIVE_INFINITY);
write(null & new Number(NaN));
write(null & new Number(+0));
write(null & new Number(-0));
write(null & new Number(0));
write(null & new Number(0.0));
write(null & new Number(-0.0));
write(null & new Number(+0.0));
write(null & new Number(1));
write(null & new Number(10));
write(null & new Number(10.0));
write(null & new Number(10.1));
write(null & new Number(-1));
write(null & new Number(-10));
write(null & new Number(-10.0));
write(null & new Number(-10.1));
write(null & new Number(Number.MAX_VALUE));
write(null & new Number(Number.MIN_VALUE));
write(null & new Number(Number.NaN));
write(null & new Number(Number.POSITIVE_INFINITY));
write(null & new Number(Number.NEGATIVE_INFINITY));
write(null & '');
write(null & 0xa);
write(null & 04);
write(null & 'hello');
write(null & 'hel' + 'lo');
write(null & String(''));
write(null & String('hello'));
write(null & String('h' + 'ello'));
write(null & new String(''));
write(null & new String('hello'));
write(null & new String('he' + 'llo'));
write(null & new Object());
write(null & new Object());
write(null & [1, 2, 3]);
write(null & [1 ,2 , 3]);
write(null & new Array(3));
write(null & Array(3));
write(null & new Array(1 ,2 ,3));
write(null & Array(1));
write(null & foo);
write(true & undefined);
write(true & null);
write(true & true);
write(true & false);
write(true & Boolean(true));
write(true & Boolean(false));
write(true & new Boolean(true));
write(true & new Boolean(false));
write(true & NaN);
write(true & +0);
write(true & -0);
write(true & 0);
write(true & 0.0);
write(true & -0.0);
write(true & +0.0);
write(true & 1);
write(true & 10);
write(true & 10.0);
write(true & 10.1);
write(true & -1);
write(true & -10);
write(true & -10.0);
write(true & -10.1);
write(true & Number.MAX_VALUE);
write(true & Number.MIN_VALUE);
write(true & Number.NaN);
write(true & Number.POSITIVE_INFINITY);
write(true & Number.NEGATIVE_INFINITY);
write(true & new Number(NaN));
write(true & new Number(+0));
write(true & new Number(-0));
write(true & new Number(0));
write(true & new Number(0.0));
write(true & new Number(-0.0));
write(true & new Number(+0.0));
write(true & new Number(1));
write(true & new Number(10));
write(true & new Number(10.0));
write(true & new Number(10.1));
write(true & new Number(-1));
write(true & new Number(-10));
write(true & new Number(-10.0));
write(true & new Number(-10.1));
write(true & new Number(Number.MAX_VALUE));
write(true & new Number(Number.MIN_VALUE));
write(true & new Number(Number.NaN));
write(true & new Number(Number.POSITIVE_INFINITY));
write(true & new Number(Number.NEGATIVE_INFINITY));
write(true & '');
write(true & 0xa);
write(true & 04);
write(true & 'hello');
write(true & 'hel' + 'lo');
write(true & String(''));
write(true & String('hello'));
write(true & String('h' + 'ello'));
write(true & new String(''));
write(true & new String('hello'));
write(true & new String('he' + 'llo'));
write(true & new Object());
write(true & new Object());
write(true & [1, 2, 3]);
write(true & [1 ,2 , 3]);
write(true & new Array(3));
write(true & Array(3));
write(true & new Array(1 ,2 ,3));
write(true & Array(1));
write(true & foo);
write(false & undefined);
write(false & null);
write(false & true);
write(false & false);
write(false & Boolean(true));
write(false & Boolean(false));
write(false & new Boolean(true));
write(false & new Boolean(false));
write(false & NaN);
write(false & +0);
write(false & -0);
write(false & 0);
write(false & 0.0);
write(false & -0.0);
write(false & +0.0);
write(false & 1);
write(false & 10);
write(false & 10.0);
write(false & 10.1);
write(false & -1);
write(false & -10);
write(false & -10.0);
write(false & -10.1);
write(false & Number.MAX_VALUE);
write(false & Number.MIN_VALUE);
write(false & Number.NaN);
write(false & Number.POSITIVE_INFINITY);
write(false & Number.NEGATIVE_INFINITY);
write(false & new Number(NaN));
write(false & new Number(+0));
write(false & new Number(-0));
write(false & new Number(0));
write(false & new Number(0.0));
write(false & new Number(-0.0));
write(false & new Number(+0.0));
write(false & new Number(1));
write(false & new Number(10));
write(false & new Number(10.0));
write(false & new Number(10.1));
write(false & new Number(-1));
write(false & new Number(-10));
write(false & new Number(-10.0));
write(false & new Number(-10.1));
write(false & new Number(Number.MAX_VALUE));
write(false & new Number(Number.MIN_VALUE));
write(false & new Number(Number.NaN));
write(false & new Number(Number.POSITIVE_INFINITY));
write(false & new Number(Number.NEGATIVE_INFINITY));
write(false & '');
write(false & 0xa);
write(false & 04);
write(false & 'hello');
write(false & 'hel' + 'lo');
write(false & String(''));
write(false & String('hello'));
write(false & String('h' + 'ello'));
write(false & new String(''));
write(false & new String('hello'));
write(false & new String('he' + 'llo'));
write(false & new Object());
write(false & new Object());
write(false & [1, 2, 3]);
write(false & [1 ,2 , 3]);
write(false & new Array(3));
write(false & Array(3));
write(false & new Array(1 ,2 ,3));
write(false & Array(1));
write(false & foo);
write(Boolean(true) & undefined);
write(Boolean(true) & null);
write(Boolean(true) & true);
write(Boolean(true) & false);
write(Boolean(true) & Boolean(true));
write(Boolean(true) & Boolean(false));
write(Boolean(true) & new Boolean(true));
write(Boolean(true) & new Boolean(false));
write(Boolean(true) & NaN);
write(Boolean(true) & +0);
write(Boolean(true) & -0);
write(Boolean(true) & 0);
write(Boolean(true) & 0.0);
write(Boolean(true) & -0.0);
write(Boolean(true) & +0.0);
write(Boolean(true) & 1);
write(Boolean(true) & 10);
write(Boolean(true) & 10.0);
write(Boolean(true) & 10.1);
write(Boolean(true) & -1);
write(Boolean(true) & -10);
write(Boolean(true) & -10.0);
write(Boolean(true) & -10.1);
write(Boolean(true) & Number.MAX_VALUE);
write(Boolean(true) & Number.MIN_VALUE);
write(Boolean(true) & Number.NaN);
write(Boolean(true) & Number.POSITIVE_INFINITY);
write(Boolean(true) & Number.NEGATIVE_INFINITY);
write(Boolean(true) & new Number(NaN));
write(Boolean(true) & new Number(+0));
write(Boolean(true) & new Number(-0));
write(Boolean(true) & new Number(0));
write(Boolean(true) & new Number(0.0));
write(Boolean(true) & new Number(-0.0));
write(Boolean(true) & new Number(+0.0));
write(Boolean(true) & new Number(1));
write(Boolean(true) & new Number(10));
write(Boolean(true) & new Number(10.0));
write(Boolean(true) & new Number(10.1));
write(Boolean(true) & new Number(-1));
write(Boolean(true) & new Number(-10));
write(Boolean(true) & new Number(-10.0));
write(Boolean(true) & new Number(-10.1));
write(Boolean(true) & new Number(Number.MAX_VALUE));
write(Boolean(true) & new Number(Number.MIN_VALUE));
write(Boolean(true) & new Number(Number.NaN));
write(Boolean(true) & new Number(Number.POSITIVE_INFINITY));
write(Boolean(true) & new Number(Number.NEGATIVE_INFINITY));
write(Boolean(true) & '');
write(Boolean(true) & 0xa);
write(Boolean(true) & 04);
write(Boolean(true) & 'hello');
write(Boolean(true) & 'hel' + 'lo');
write(Boolean(true) & String(''));
write(Boolean(true) & String('hello'));
write(Boolean(true) & String('h' + 'ello'));
write(Boolean(true) & new String(''));
write(Boolean(true) & new String('hello'));
write(Boolean(true) & new String('he' + 'llo'));
write(Boolean(true) & new Object());
write(Boolean(true) & new Object());
write(Boolean(true) & [1, 2, 3]);
write(Boolean(true) & [1 ,2 , 3]);
write(Boolean(true) & new Array(3));
write(Boolean(true) & Array(3));
write(Boolean(true) & new Array(1 ,2 ,3));
write(Boolean(true) & Array(1));
write(Boolean(true) & foo);
write(Boolean(false) & undefined);
write(Boolean(false) & null);
write(Boolean(false) & true);
write(Boolean(false) & false);
write(Boolean(false) & Boolean(true));
write(Boolean(false) & Boolean(false));
write(Boolean(false) & new Boolean(true));
write(Boolean(false) & new Boolean(false));
write(Boolean(false) & NaN);
write(Boolean(false) & +0);
write(Boolean(false) & -0);
write(Boolean(false) & 0);
write(Boolean(false) & 0.0);
write(Boolean(false) & -0.0);
write(Boolean(false) & +0.0);
write(Boolean(false) & 1);
write(Boolean(false) & 10);
write(Boolean(false) & 10.0);
write(Boolean(false) & 10.1);
write(Boolean(false) & -1);
write(Boolean(false) & -10);
write(Boolean(false) & -10.0);
write(Boolean(false) & -10.1);
write(Boolean(false) & Number.MAX_VALUE);
write(Boolean(false) & Number.MIN_VALUE);
write(Boolean(false) & Number.NaN);
write(Boolean(false) & Number.POSITIVE_INFINITY);
write(Boolean(false) & Number.NEGATIVE_INFINITY);
write(Boolean(false) & new Number(NaN));
write(Boolean(false) & new Number(+0));
write(Boolean(false) & new Number(-0));
write(Boolean(false) & new Number(0));
write(Boolean(false) & new Number(0.0));
write(Boolean(false) & new Number(-0.0));
write(Boolean(false) & new Number(+0.0));
write(Boolean(false) & new Number(1));
write(Boolean(false) & new Number(10));
write(Boolean(false) & new Number(10.0));
write(Boolean(false) & new Number(10.1));
write(Boolean(false) & new Number(-1));
write(Boolean(false) & new Number(-10));
write(Boolean(false) & new Number(-10.0));
write(Boolean(false) & new Number(-10.1));
write(Boolean(false) & new Number(Number.MAX_VALUE));
write(Boolean(false) & new Number(Number.MIN_VALUE));
write(Boolean(false) & new Number(Number.NaN));
write(Boolean(false) & new Number(Number.POSITIVE_INFINITY));
write(Boolean(false) & new Number(Number.NEGATIVE_INFINITY));
write(Boolean(false) & '');
write(Boolean(false) & 0xa);
write(Boolean(false) & 04);
write(Boolean(false) & 'hello');
write(Boolean(false) & 'hel' + 'lo');
write(Boolean(false) & String(''));
write(Boolean(false) & String('hello'));
write(Boolean(false) & String('h' + 'ello'));
write(Boolean(false) & new String(''));
write(Boolean(false) & new String('hello'));
write(Boolean(false) & new String('he' + 'llo'));
write(Boolean(false) & new Object());
write(Boolean(false) & new Object());
write(Boolean(false) & [1, 2, 3]);
write(Boolean(false) & [1 ,2 , 3]);
write(Boolean(false) & new Array(3));
write(Boolean(false) & Array(3));
write(Boolean(false) & new Array(1 ,2 ,3));
write(Boolean(false) & Array(1));
write(Boolean(false) & foo);
write(new Boolean(true) & undefined);
write(new Boolean(true) & null);
write(new Boolean(true) & true);
write(new Boolean(true) & false);
write(new Boolean(true) & Boolean(true));
write(new Boolean(true) & Boolean(false));
write(new Boolean(true) & new Boolean(true));
write(new Boolean(true) & new Boolean(false));
write(new Boolean(true) & NaN);
write(new Boolean(true) & +0);
write(new Boolean(true) & -0);
write(new Boolean(true) & 0);
write(new Boolean(true) & 0.0);
write(new Boolean(true) & -0.0);
write(new Boolean(true) & +0.0);
write(new Boolean(true) & 1);
write(new Boolean(true) & 10);
write(new Boolean(true) & 10.0);
write(new Boolean(true) & 10.1);
write(new Boolean(true) & -1);
write(new Boolean(true) & -10);
write(new Boolean(true) & -10.0);
write(new Boolean(true) & -10.1);
write(new Boolean(true) & Number.MAX_VALUE);
write(new Boolean(true) & Number.MIN_VALUE);
write(new Boolean(true) & Number.NaN);
write(new Boolean(true) & Number.POSITIVE_INFINITY);
write(new Boolean(true) & Number.NEGATIVE_INFINITY);
write(new Boolean(true) & new Number(NaN));
write(new Boolean(true) & new Number(+0));
write(new Boolean(true) & new Number(-0));
write(new Boolean(true) & new Number(0));
write(new Boolean(true) & new Number(0.0));
write(new Boolean(true) & new Number(-0.0));
write(new Boolean(true) & new Number(+0.0));
write(new Boolean(true) & new Number(1));
write(new Boolean(true) & new Number(10));
write(new Boolean(true) & new Number(10.0));
write(new Boolean(true) & new Number(10.1));
write(new Boolean(true) & new Number(-1));
write(new Boolean(true) & new Number(-10));
write(new Boolean(true) & new Number(-10.0));
write(new Boolean(true) & new Number(-10.1));
write(new Boolean(true) & new Number(Number.MAX_VALUE));
write(new Boolean(true) & new Number(Number.MIN_VALUE));
write(new Boolean(true) & new Number(Number.NaN));
write(new Boolean(true) & new Number(Number.POSITIVE_INFINITY));
write(new Boolean(true) & new Number(Number.NEGATIVE_INFINITY));
write(new Boolean(true) & '');
write(new Boolean(true) & 0xa);
write(new Boolean(true) & 04);
write(new Boolean(true) & 'hello');
write(new Boolean(true) & 'hel' + 'lo');
write(new Boolean(true) & String(''));
write(new Boolean(true) & String('hello'));
write(new Boolean(true) & String('h' + 'ello'));
write(new Boolean(true) & new String(''));
write(new Boolean(true) & new String('hello'));
write(new Boolean(true) & new String('he' + 'llo'));
write(new Boolean(true) & new Object());
write(new Boolean(true) & new Object());
write(new Boolean(true) & [1, 2, 3]);
write(new Boolean(true) & [1 ,2 , 3]);
write(new Boolean(true) & new Array(3));
write(new Boolean(true) & Array(3));
write(new Boolean(true) & new Array(1 ,2 ,3));
write(new Boolean(true) & Array(1));
write(new Boolean(true) & foo);
write(new Boolean(false) & undefined);
write(new Boolean(false) & null);
write(new Boolean(false) & true);
write(new Boolean(false) & false);
write(new Boolean(false) & Boolean(true));
write(new Boolean(false) & Boolean(false));
write(new Boolean(false) & new Boolean(true));
write(new Boolean(false) & new Boolean(false));
write(new Boolean(false) & NaN);
write(new Boolean(false) & +0);
write(new Boolean(false) & -0);
write(new Boolean(false) & 0);
write(new Boolean(false) & 0.0);
write(new Boolean(false) & -0.0);
write(new Boolean(false) & +0.0);
write(new Boolean(false) & 1);
write(new Boolean(false) & 10);
write(new Boolean(false) & 10.0);
write(new Boolean(false) & 10.1);
write(new Boolean(false) & -1);
write(new Boolean(false) & -10);
write(new Boolean(false) & -10.0);
write(new Boolean(false) & -10.1);
write(new Boolean(false) & Number.MAX_VALUE);
write(new Boolean(false) & Number.MIN_VALUE);
write(new Boolean(false) & Number.NaN);
write(new Boolean(false) & Number.POSITIVE_INFINITY);
write(new Boolean(false) & Number.NEGATIVE_INFINITY);
write(new Boolean(false) & new Number(NaN));
write(new Boolean(false) & new Number(+0));
write(new Boolean(false) & new Number(-0));
write(new Boolean(false) & new Number(0));
write(new Boolean(false) & new Number(0.0));
write(new Boolean(false) & new Number(-0.0));
write(new Boolean(false) & new Number(+0.0));
write(new Boolean(false) & new Number(1));
write(new Boolean(false) & new Number(10));
write(new Boolean(false) & new Number(10.0));
write(new Boolean(false) & new Number(10.1));
write(new Boolean(false) & new Number(-1));
write(new Boolean(false) & new Number(-10));
write(new Boolean(false) & new Number(-10.0));
write(new Boolean(false) & new Number(-10.1));
write(new Boolean(false) & new Number(Number.MAX_VALUE));
write(new Boolean(false) & new Number(Number.MIN_VALUE));
write(new Boolean(false) & new Number(Number.NaN));
write(new Boolean(false) & new Number(Number.POSITIVE_INFINITY));
write(new Boolean(false) & new Number(Number.NEGATIVE_INFINITY));
write(new Boolean(false) & '');
write(new Boolean(false) & 0xa);
write(new Boolean(false) & 04);
write(new Boolean(false) & 'hello');
write(new Boolean(false) & 'hel' + 'lo');
write(new Boolean(false) & String(''));
write(new Boolean(false) & String('hello'));
write(new Boolean(false) & String('h' + 'ello'));
write(new Boolean(false) & new String(''));
write(new Boolean(false) & new String('hello'));
write(new Boolean(false) & new String('he' + 'llo'));
write(new Boolean(false) & new Object());
write(new Boolean(false) & new Object());
write(new Boolean(false) & [1, 2, 3]);
write(new Boolean(false) & [1 ,2 , 3]);
write(new Boolean(false) & new Array(3));
write(new Boolean(false) & Array(3));
write(new Boolean(false) & new Array(1 ,2 ,3));
write(new Boolean(false) & Array(1));
write(new Boolean(false) & foo);
write(NaN & undefined);
write(NaN & null);
write(NaN & true);
write(NaN & false);
write(NaN & Boolean(true));
write(NaN & Boolean(false));
write(NaN & new Boolean(true));
write(NaN & new Boolean(false));
write(NaN & NaN);
write(NaN & +0);
write(NaN & -0);
write(NaN & 0);
write(NaN & 0.0);
write(NaN & -0.0);
write(NaN & +0.0);
write(NaN & 1);
write(NaN & 10);
write(NaN & 10.0);
write(NaN & 10.1);
write(NaN & -1);
write(NaN & -10);
write(NaN & -10.0);
write(NaN & -10.1);
write(NaN & Number.MAX_VALUE);
write(NaN & Number.MIN_VALUE);
write(NaN & Number.NaN);
write(NaN & Number.POSITIVE_INFINITY);
write(NaN & Number.NEGATIVE_INFINITY);
write(NaN & new Number(NaN));
write(NaN & new Number(+0));
write(NaN & new Number(-0));
write(NaN & new Number(0));
write(NaN & new Number(0.0));
write(NaN & new Number(-0.0));
write(NaN & new Number(+0.0));
write(NaN & new Number(1));
write(NaN & new Number(10));
write(NaN & new Number(10.0));
write(NaN & new Number(10.1));
write(NaN & new Number(-1));
write(NaN & new Number(-10));
write(NaN & new Number(-10.0));
write(NaN & new Number(-10.1));
write(NaN & new Number(Number.MAX_VALUE));
write(NaN & new Number(Number.MIN_VALUE));
write(NaN & new Number(Number.NaN));
write(NaN & new Number(Number.POSITIVE_INFINITY));
write(NaN & new Number(Number.NEGATIVE_INFINITY));
write(NaN & '');
write(NaN & 0xa);
write(NaN & 04);
write(NaN & 'hello');
write(NaN & 'hel' + 'lo');
write(NaN & String(''));
write(NaN & String('hello'));
write(NaN & String('h' + 'ello'));
write(NaN & new String(''));
write(NaN & new String('hello'));
write(NaN & new String('he' + 'llo'));
write(NaN & new Object());
write(NaN & new Object());
write(NaN & [1, 2, 3]);
write(NaN & [1 ,2 , 3]);
write(NaN & new Array(3));
write(NaN & Array(3));
write(NaN & new Array(1 ,2 ,3));
write(NaN & Array(1));
write(NaN & foo);
write(+0 & undefined);
write(+0 & null);
write(+0 & true);
write(+0 & false);
write(+0 & Boolean(true));
write(+0 & Boolean(false));
write(+0 & new Boolean(true));
write(+0 & new Boolean(false));
write(+0 & NaN);
write(+0 & +0);
write(+0 & -0);
write(+0 & 0);
write(+0 & 0.0);
write(+0 & -0.0);
write(+0 & +0.0);
write(+0 & 1);
write(+0 & 10);
write(+0 & 10.0);
write(+0 & 10.1);
write(+0 & -1);
write(+0 & -10);
write(+0 & -10.0);
write(+0 & -10.1);
write(+0 & Number.MAX_VALUE);
write(+0 & Number.MIN_VALUE);
write(+0 & Number.NaN);
write(+0 & Number.POSITIVE_INFINITY);
write(+0 & Number.NEGATIVE_INFINITY);
write(+0 & new Number(NaN));
write(+0 & new Number(+0));
write(+0 & new Number(-0));
write(+0 & new Number(0));
write(+0 & new Number(0.0));
write(+0 & new Number(-0.0));
write(+0 & new Number(+0.0));
write(+0 & new Number(1));
write(+0 & new Number(10));
write(+0 & new Number(10.0));
write(+0 & new Number(10.1));
write(+0 & new Number(-1));
write(+0 & new Number(-10));
write(+0 & new Number(-10.0));
write(+0 & new Number(-10.1));
write(+0 & new Number(Number.MAX_VALUE));
write(+0 & new Number(Number.MIN_VALUE));
write(+0 & new Number(Number.NaN));
write(+0 & new Number(Number.POSITIVE_INFINITY));
write(+0 & new Number(Number.NEGATIVE_INFINITY));
write(+0 & '');
write(+0 & 0xa);
write(+0 & 04);
write(+0 & 'hello');
write(+0 & 'hel' + 'lo');
write(+0 & String(''));
write(+0 & String('hello'));
write(+0 & String('h' + 'ello'));
write(+0 & new String(''));
write(+0 & new String('hello'));
write(+0 & new String('he' + 'llo'));
write(+0 & new Object());
write(+0 & new Object());
write(+0 & [1, 2, 3]);
write(+0 & [1 ,2 , 3]);
write(+0 & new Array(3));
write(+0 & Array(3));
write(+0 & new Array(1 ,2 ,3));
write(+0 & Array(1));
write(+0 & foo);
write(-0 & undefined);
write(-0 & null);
write(-0 & true);
write(-0 & false);
write(-0 & Boolean(true));
write(-0 & Boolean(false));
write(-0 & new Boolean(true));
write(-0 & new Boolean(false));
write(-0 & NaN);
write(-0 & +0);
write(-0 & -0);
write(-0 & 0);
write(-0 & 0.0);
write(-0 & -0.0);
write(-0 & +0.0);
write(-0 & 1);
write(-0 & 10);
write(-0 & 10.0);
write(-0 & 10.1);
write(-0 & -1);
write(-0 & -10);
write(-0 & -10.0);
write(-0 & -10.1);
write(-0 & Number.MAX_VALUE);
write(-0 & Number.MIN_VALUE);
write(-0 & Number.NaN);
write(-0 & Number.POSITIVE_INFINITY);
write(-0 & Number.NEGATIVE_INFINITY);
write(-0 & new Number(NaN));
write(-0 & new Number(+0));
write(-0 & new Number(-0));
write(-0 & new Number(0));
write(-0 & new Number(0.0));
write(-0 & new Number(-0.0));
write(-0 & new Number(+0.0));
write(-0 & new Number(1));
write(-0 & new Number(10));
write(-0 & new Number(10.0));
write(-0 & new Number(10.1));
write(-0 & new Number(-1));
write(-0 & new Number(-10));
write(-0 & new Number(-10.0));
write(-0 & new Number(-10.1));
write(-0 & new Number(Number.MAX_VALUE));
write(-0 & new Number(Number.MIN_VALUE));
write(-0 & new Number(Number.NaN));
write(-0 & new Number(Number.POSITIVE_INFINITY));
write(-0 & new Number(Number.NEGATIVE_INFINITY));
write(-0 & '');
write(-0 & 0xa);
write(-0 & 04);
write(-0 & 'hello');
write(-0 & 'hel' + 'lo');
write(-0 & String(''));
write(-0 & String('hello'));
write(-0 & String('h' + 'ello'));
write(-0 & new String(''));
write(-0 & new String('hello'));
write(-0 & new String('he' + 'llo'));
write(-0 & new Object());
write(-0 & new Object());
write(-0 & [1, 2, 3]);
write(-0 & [1 ,2 , 3]);
write(-0 & new Array(3));
write(-0 & Array(3));
write(-0 & new Array(1 ,2 ,3));
write(-0 & Array(1));
write(-0 & foo);
write(0 & undefined);
write(0 & null);
write(0 & true);
write(0 & false);
write(0 & Boolean(true));
write(0 & Boolean(false));
write(0 & new Boolean(true));
write(0 & new Boolean(false));
write(0 & NaN);
write(0 & +0);
write(0 & -0);
write(0 & 0);
write(0 & 0.0);
write(0 & -0.0);
write(0 & +0.0);
write(0 & 1);
write(0 & 10);
write(0 & 10.0);
write(0 & 10.1);
write(0 & -1);
write(0 & -10);
write(0 & -10.0);
write(0 & -10.1);
write(0 & Number.MAX_VALUE);
write(0 & Number.MIN_VALUE);
write(0 & Number.NaN);
write(0 & Number.POSITIVE_INFINITY);
write(0 & Number.NEGATIVE_INFINITY);
write(0 & new Number(NaN));
write(0 & new Number(+0));
write(0 & new Number(-0));
write(0 & new Number(0));
write(0 & new Number(0.0));
write(0 & new Number(-0.0));
write(0 & new Number(+0.0));
write(0 & new Number(1));
write(0 & new Number(10));
write(0 & new Number(10.0));
write(0 & new Number(10.1));
write(0 & new Number(-1));
write(0 & new Number(-10));
write(0 & new Number(-10.0));
write(0 & new Number(-10.1));
write(0 & new Number(Number.MAX_VALUE));
write(0 & new Number(Number.MIN_VALUE));
write(0 & new Number(Number.NaN));
write(0 & new Number(Number.POSITIVE_INFINITY));
write(0 & new Number(Number.NEGATIVE_INFINITY));
write(0 & '');
write(0 & 0xa);
write(0 & 04);
write(0 & 'hello');
write(0 & 'hel' + 'lo');
write(0 & String(''));
write(0 & String('hello'));
write(0 & String('h' + 'ello'));
write(0 & new String(''));
write(0 & new String('hello'));
write(0 & new String('he' + 'llo'));
write(0 & new Object());
write(0 & new Object());
write(0 & [1, 2, 3]);
write(0 & [1 ,2 , 3]);
write(0 & new Array(3));
write(0 & Array(3));
write(0 & new Array(1 ,2 ,3));
write(0 & Array(1));
write(0 & foo);
write(0.0 & undefined);
write(0.0 & null);
write(0.0 & true);
write(0.0 & false);
write(0.0 & Boolean(true));
write(0.0 & Boolean(false));
write(0.0 & new Boolean(true));
write(0.0 & new Boolean(false));
write(0.0 & NaN);
write(0.0 & +0);
write(0.0 & -0);
write(0.0 & 0);
write(0.0 & 0.0);
write(0.0 & -0.0);
write(0.0 & +0.0);
write(0.0 & 1);
write(0.0 & 10);
write(0.0 & 10.0);
write(0.0 & 10.1);
write(0.0 & -1);
write(0.0 & -10);
write(0.0 & -10.0);
write(0.0 & -10.1);
write(0.0 & Number.MAX_VALUE);
write(0.0 & Number.MIN_VALUE);
write(0.0 & Number.NaN);
write(0.0 & Number.POSITIVE_INFINITY);
write(0.0 & Number.NEGATIVE_INFINITY);
write(0.0 & new Number(NaN));
write(0.0 & new Number(+0));
write(0.0 & new Number(-0));
write(0.0 & new Number(0));
write(0.0 & new Number(0.0));
write(0.0 & new Number(-0.0));
write(0.0 & new Number(+0.0));
write(0.0 & new Number(1));
write(0.0 & new Number(10));
write(0.0 & new Number(10.0));
write(0.0 & new Number(10.1));
write(0.0 & new Number(-1));
write(0.0 & new Number(-10));
write(0.0 & new Number(-10.0));
write(0.0 & new Number(-10.1));
write(0.0 & new Number(Number.MAX_VALUE));
write(0.0 & new Number(Number.MIN_VALUE));
write(0.0 & new Number(Number.NaN));
write(0.0 & new Number(Number.POSITIVE_INFINITY));
write(0.0 & new Number(Number.NEGATIVE_INFINITY));
write(0.0 & '');
write(0.0 & 0xa);
write(0.0 & 04);
write(0.0 & 'hello');
write(0.0 & 'hel' + 'lo');
write(0.0 & String(''));
write(0.0 & String('hello'));
write(0.0 & String('h' + 'ello'));
write(0.0 & new String(''));
write(0.0 & new String('hello'));
write(0.0 & new String('he' + 'llo'));
write(0.0 & new Object());
write(0.0 & new Object());
write(0.0 & [1, 2, 3]);
write(0.0 & [1 ,2 , 3]);
write(0.0 & new Array(3));
write(0.0 & Array(3));
write(0.0 & new Array(1 ,2 ,3));
write(0.0 & Array(1));
write(0.0 & foo);
write(-0.0 & undefined);
write(-0.0 & null);
write(-0.0 & true);
write(-0.0 & false);
write(-0.0 & Boolean(true));
write(-0.0 & Boolean(false));
write(-0.0 & new Boolean(true));
write(-0.0 & new Boolean(false));
write(-0.0 & NaN);
write(-0.0 & +0);
write(-0.0 & -0);
write(-0.0 & 0);
write(-0.0 & 0.0);
write(-0.0 & -0.0);
write(-0.0 & +0.0);
write(-0.0 & 1);
write(-0.0 & 10);
write(-0.0 & 10.0);
write(-0.0 & 10.1);
write(-0.0 & -1);
write(-0.0 & -10);
write(-0.0 & -10.0);
write(-0.0 & -10.1);
write(-0.0 & Number.MAX_VALUE);
write(-0.0 & Number.MIN_VALUE);
write(-0.0 & Number.NaN);
write(-0.0 & Number.POSITIVE_INFINITY);
write(-0.0 & Number.NEGATIVE_INFINITY);
write(-0.0 & new Number(NaN));
write(-0.0 & new Number(+0));
write(-0.0 & new Number(-0));
write(-0.0 & new Number(0));
write(-0.0 & new Number(0.0));
write(-0.0 & new Number(-0.0));
write(-0.0 & new Number(+0.0));
write(-0.0 & new Number(1));
write(-0.0 & new Number(10));
write(-0.0 & new Number(10.0));
write(-0.0 & new Number(10.1));
write(-0.0 & new Number(-1));
write(-0.0 & new Number(-10));
write(-0.0 & new Number(-10.0));
write(-0.0 & new Number(-10.1));
write(-0.0 & new Number(Number.MAX_VALUE));
write(-0.0 & new Number(Number.MIN_VALUE));
write(-0.0 & new Number(Number.NaN));
write(-0.0 & new Number(Number.POSITIVE_INFINITY));
write(-0.0 & new Number(Number.NEGATIVE_INFINITY));
write(-0.0 & '');
write(-0.0 & 0xa);
write(-0.0 & 04);
write(-0.0 & 'hello');
write(-0.0 & 'hel' + 'lo');
write(-0.0 & String(''));
write(-0.0 & String('hello'));
write(-0.0 & String('h' + 'ello'));
write(-0.0 & new String(''));
write(-0.0 & new String('hello'));
write(-0.0 & new String('he' + 'llo'));
write(-0.0 & new Object());
write(-0.0 & new Object());
write(-0.0 & [1, 2, 3]);
write(-0.0 & [1 ,2 , 3]);
write(-0.0 & new Array(3));
write(-0.0 & Array(3));
write(-0.0 & new Array(1 ,2 ,3));
write(-0.0 & Array(1));
write(-0.0 & foo);
write(+0.0 & undefined);
write(+0.0 & null);
write(+0.0 & true);
write(+0.0 & false);
write(+0.0 & Boolean(true));
write(+0.0 & Boolean(false));
write(+0.0 & new Boolean(true));
write(+0.0 & new Boolean(false));
write(+0.0 & NaN);
write(+0.0 & +0);
write(+0.0 & -0);
write(+0.0 & 0);
write(+0.0 & 0.0);
write(+0.0 & -0.0);
write(+0.0 & +0.0);
write(+0.0 & 1);
write(+0.0 & 10);
write(+0.0 & 10.0);
write(+0.0 & 10.1);
write(+0.0 & -1);
write(+0.0 & -10);
write(+0.0 & -10.0);
write(+0.0 & -10.1);
write(+0.0 & Number.MAX_VALUE);
write(+0.0 & Number.MIN_VALUE);
write(+0.0 & Number.NaN);
write(+0.0 & Number.POSITIVE_INFINITY);
write(+0.0 & Number.NEGATIVE_INFINITY);
write(+0.0 & new Number(NaN));
write(+0.0 & new Number(+0));
write(+0.0 & new Number(-0));
write(+0.0 & new Number(0));
write(+0.0 & new Number(0.0));
write(+0.0 & new Number(-0.0));
write(+0.0 & new Number(+0.0));
write(+0.0 & new Number(1));
write(+0.0 & new Number(10));
write(+0.0 & new Number(10.0));
write(+0.0 & new Number(10.1));
write(+0.0 & new Number(-1));
write(+0.0 & new Number(-10));
write(+0.0 & new Number(-10.0));
write(+0.0 & new Number(-10.1));
write(+0.0 & new Number(Number.MAX_VALUE));
write(+0.0 & new Number(Number.MIN_VALUE));
write(+0.0 & new Number(Number.NaN));
write(+0.0 & new Number(Number.POSITIVE_INFINITY));
write(+0.0 & new Number(Number.NEGATIVE_INFINITY));
