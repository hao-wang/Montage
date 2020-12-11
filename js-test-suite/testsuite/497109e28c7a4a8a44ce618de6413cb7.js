load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("2a038e91f6e5f6c7add968f0a7889dbd.js");
load("e4cce4d527d806f2da0b524a99b7d8f6.js");
// |reftest| skip-if(!this.hasOwnProperty("SIMD"))

/*
 * Any copyright is dedicated to the Public Domain.
 * https://creativecommons.org/publicdomain/zero/1.0/
 */

var { testLoad } = Helpers;

testLoad('Uint8x16', new Uint8Array(SIZE_8_ARRAY));
testLoad('Uint16x8', new Uint16Array(SIZE_16_ARRAY));
testLoad('Uint32x4', new Uint32Array(SIZE_32_ARRAY));

if (typeof SharedArrayBuffer != "undefined") {
  testLoad('Uint8x16', new Uint8Array(new SharedArrayBuffer(SIZE_8_ARRAY)));
  testLoad('Uint16x8', new Uint16Array(new SharedArrayBuffer(SIZE_8_ARRAY)));
  testLoad('Uint32x4', new Uint32Array(new SharedArrayBuffer(SIZE_8_ARRAY)));
}

if (typeof reportCompare === "function")
    reportCompare(true, true);

