load("8b38e12cab5de21ec5393724c0d9b7dd.js");
//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

WScript.LoadScriptFile("dc12371bf414696a113c371a90d0997a.js");

var tests = [
    {
        name: "Setting proxy object on Map and WeakMap",
        body() {
            [WeakMap, Map].forEach(function(ctor) {
                var target = {};
                let p = new Proxy(target, {});
                let map = new ctor();
                map.set(p, 101);
                assert.areEqual(map.get(p), 101, ctor.name + " map should be able to set and get the proxy object");
                p.x = 20;
                assert.areEqual(target.x, 20, "target object should work as expected even after proxy object is added to map");
            });
        }
    },
    {
        name: "Setting proxy object on Map and WeakMap - multiple sets and delete",
        body() {
            [WeakMap, Map].forEach(function(ctor) {
                var target = {};
                let p = new Proxy(target, {});
                let map = new ctor();
                map.set(p, 101);
                assert.areEqual(map.get(p), 101);
                map.delete(p);
                assert.areEqual(map.get(p), undefined, ctor.name + " map can remove the proxy object properly");
                map.set(p, 102);
                assert.areEqual(map.get(p), 102, ctor.name + " proxy object can be set again and it returns 102");
                p.x = 20;
                assert.areEqual(target.x, 20, "target object should work as expected even after proxy object is added to map");
            });
        }
    },
    {
        name: "Assertion validation : returning descriptor during getOwnPropertyDescriptor should not pollute the descriptor",
        body() {
            var target = {};
            var handler = {};
            var getOwnPropertyDescriptorCalled = false;
            handler['defineProperty'] = function () {
                assert.fail("This function will not be called as 'getOwnPropertyDescriptor' will add accessor");
            };
            
            handler['getOwnPropertyDescriptor'] = function (t, property) {
                getOwnPropertyDescriptorCalled = true;
                Object.defineProperty(t, 'abc', { set: function () { } });
                return Reflect.getOwnPropertyDescriptor(t, property);
            };
            
            var proxy = new Proxy(target, handler);
            proxy.abc = undefined;
            assert.isTrue(getOwnPropertyDescriptorCalled);
        }
    },
    {
        name: "Assertion validation : returning descriptor with writable false should not defineProperty again.",
        body() {
            var target = {};
            var handler = {};
            var getOwnPropertyDescriptorCalled = false;
            handler['defineProperty'] = function () {
                assert.fail("This function will not be called as 'getOwnPropertyDescriptor' will add property with writable false");
            };
            
            handler['getOwnPropertyDescriptor'] = function (t, property) {
                getOwnPropertyDescriptorCalled = true;
                Object.defineProperty(t, 'abc', { value : 1, writable : false });
                return Reflect.getOwnPropertyDescriptor(t, property);
            };
            
            var proxy = new Proxy(target, handler);
            proxy.abc = undefined;
            assert.isTrue(getOwnPropertyDescriptorCalled);
        }
    },
    {
        name: "No property found at getOwnPropertyDescriptor will call defineProperty",
        body() {
            var target = {};
            var handler = {};
            var definePropertyCalled = false;
            var getOwnPropertyDescriptorCalled = false;
            handler['defineProperty'] = function () {
                definePropertyCalled = true;
            };
            
            handler['getOwnPropertyDescriptor'] = function (t, property) {
                getOwnPropertyDescriptorCalled = true;
                return Reflect.getOwnPropertyDescriptor(t, property);
            };
            
            var proxy = new Proxy(target, handler);
            proxy.abc = undefined;
            assert.isTrue(definePropertyCalled);
            assert.isTrue(getOwnPropertyDescriptorCalled);
        }
    }
];

testRunner.runTests(tests, { verbose: WScript.Arguments[0] != "summary" });
