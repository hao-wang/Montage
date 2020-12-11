load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
load("68b329da9893e34099c7d8ad5cb9c940.js");
// Copyright 2012 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @description Tests that Date.prototype.toLocaleString & Co. produces the same results as Intl.DateTimeFormat.
 * @author Norbert Lindenberg
 */

$INCLUDE("3bd8fde197e9106a216a7e98b929475a.js");

var functions = {
    toLocaleString: [Date.prototype.toLocaleString,
        {year: "numeric", month: "numeric", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric"}],
    toLocaleDateString: [Date.prototype.toLocaleDateString,
        {year: "numeric", month: "numeric", day: "numeric"}],
    toLocaleTimeString: [Date.prototype.toLocaleTimeString,
        {hour: "numeric", minute: "numeric", second: "numeric"}]
};
var dates = [new Date(), new Date(0), new Date(Date.parse("1989-11-09T17:57:00Z"))];
var locales = [undefined, ["de"], ["th-u-ca-gregory-nu-thai"], ["en"], ["ja-u-ca-japanese"], ["ar-u-ca-islamicc-nu-arab"]];
var options = [
    undefined,
    {hour12: false},
    {month: "long", day: "numeric", hour: "2-digit", minute: "2-digit"}
];

Object.getOwnPropertyNames(functions).forEach(function (p) {
    var f = functions[p][0];
    var defaults = functions[p][1];
    locales.forEach(function (locales) {
        options.forEach(function (options) {
            var constructorOptions = options;
            if (options === undefined) {
                constructorOptions = defaults;
            } else if (options.day === undefined) {
                // for simplicity, our options above have either both date and time or neither
                constructorOptions = Object.create(defaults);
                for (var prop in options) {
                    if (options.hasOwnProperty(prop)) {
                        constructorOptions[prop] = options[prop];
                    }
                }
            }
            var referenceDateTimeFormat = new Intl.DateTimeFormat(locales, constructorOptions);
            var referenceFormatted = dates.map(referenceDateTimeFormat.format);
            
            var formatted = dates.map(function (a) { return f.call(a, locales, options); });
            try {
                testArraysAreSame(referenceFormatted, formatted);
            } catch (e) {
                e.message += " (Testing with locales " + locales + "; options " +
                    (options ? JSON.stringify(options) : options) + ".)";
                throw e;
            }
        });
    });
});

