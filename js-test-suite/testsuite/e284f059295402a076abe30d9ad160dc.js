load("fcfbc86708bc3a4062c2091a062e13b6.js");
// |reftest| skip-if(!this.hasOwnProperty("Intl")||!this.hasOwnProperty("addIntlExtras"))

addIntlExtras(Intl);

function IsConstructor(o) {
  try {
    new (new Proxy(o, {construct: () => ({})}));
    return true;
  } catch (e) {
    return false;
  }
}

function IsObject(o) {
    return Object(o) === o;
}

function thisValues() {
    const intlConstructors = Object.getOwnPropertyNames(Intl).map(name => Intl[name]).filter(IsConstructor);

    return [
        // Primitive values.
        ...[undefined, null, true, "abc", Symbol(), 123],

        // Object values.
        ...[{}, [], /(?:)/, function(){}, new Proxy({}, {})],

        // Intl objects.
        ...[].concat(...intlConstructors.map(ctor => [
            // Instance of an Intl constructor.
            new ctor(),

            // Instance of a subclassed Intl constructor.
            new class extends ctor {},

            // Object inheriting from an Intl constructor prototype.
            Object.create(ctor.prototype),

            // Intl object not inheriting from its default prototype.
            Object.setPrototypeOf(new ctor(), Object.prototype),
        ])),
    ];
}

// Invoking [[Call]] for Intl.PluralRules always returns a new PluralRules instance.
for (let thisValue of thisValues()) {
    let obj = Intl.PluralRules.call(thisValue);
    assertEq(Object.is(obj, thisValue), false);
    assertEq(obj instanceof Intl.PluralRules, true);

    // Ensure Intl.[[FallbackSymbol]] wasn't installed on |thisValue|.
    if (IsObject(thisValue))
        assertEqArray(Object.getOwnPropertySymbols(thisValue), []);
}

// Intl.PluralRules doesn't use the legacy Intl constructor compromise semantics.
for (let thisValue of thisValues()) {
    // Ensure instanceof operator isn't invoked for Intl.PluralRules.
    Object.defineProperty(Intl.PluralRules, Symbol.hasInstance, {
        get() {
            assertEq(false, true, "@@hasInstance operator called");
        }, configurable: true
    });
    let obj = Intl.PluralRules.call(thisValue);
    delete Intl.PluralRules[Symbol.hasInstance];
    assertEq(Object.is(obj, thisValue), false);
    assertEq(obj instanceof Intl.PluralRules, true);
}

if (typeof reportCompare === "function")
    reportCompare(true, true);
