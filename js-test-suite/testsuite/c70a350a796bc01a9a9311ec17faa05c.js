load("e2371540d876710daf38e749390aa2a3.js");
description(
'This test case tests the various typed array and related constructors. ' +
'In particular, makes sure that you use the "new" keyword when using the constructors.'
);

let arrayTypes = [
    Int8Array,
    Int16Array,
    Int32Array,
    Uint8Array,
    Uint8ClampedArray,
    Uint16Array,
    Uint32Array,
    Float32Array,
    Float64Array,
];

// The prototype should be the same for every type of view.
for (let arrayType of arrayTypes) {
    shouldThrow("" + arrayType.name + "()");
    shouldNotThrow("new " + arrayType.name + "()");
    shouldBe("" + arrayType.name + ".length", "3");
}

shouldThrow("DataView(new ArrayBuffer())");
shouldNotThrow("new DataView(new ArrayBuffer())");
shouldBe("DataView.length", "3");

load("cf1a0efae1078faee510f7bda78d4902.js");
