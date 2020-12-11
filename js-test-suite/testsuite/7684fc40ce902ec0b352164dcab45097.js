if (platformSupportsSamplingProfiler()) {
    load("974c7a35394801838e0b8a6b7ef926ea.js");

    function foo() {
        let o = {};
        for (let i = 0; i < 100; i++) {
            o[i + "p"] = i;
        }
    }

    function bar() {
        let o = {};
        for (let i = 0; i < 100; i++) {
            o[i + "p"] = i;
        }
    }

    let boundFoo = foo.bind(null);
    let boundBar = bar.bind(null);

    let baz = function() {
        boundFoo();
        boundBar();
    }

    runTest(baz, ["foo", "bound foo", "baz"]);
    runTest(baz, ["bar", "bound bar", "baz"]);
}
