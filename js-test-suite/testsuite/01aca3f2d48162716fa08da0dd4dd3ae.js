load("201224b0d1c296b45befd2285e95dd42.js");
// Check gating of shared memory features in plain js (bug 1231338).

// Need this testing function to continue.
if (!this.sharedMemoryEnabled)
    quit(0);

assertEq(sharedMemoryEnabled(), !!this.SharedArrayBuffer);
assertEq(sharedMemoryEnabled(), !!this.Atomics);
