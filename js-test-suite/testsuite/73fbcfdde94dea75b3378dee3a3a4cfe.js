load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| allow-oom
if (typeof oomAfterAllocations != "function")
  quit();

lfcode = new Array();
oomAfterAllocations(100);
loadFile(file);
lfGlobal = newGlobal()
for (lfLocal in this)
  if (!(lfLocal in lfGlobal))
    lfGlobal[lfLocal] = this[lfLocal]
offThreadCompileScript(lfVarx)
lfGlobal.runOffThreadScript()
