/* Lovingly generated by gen-spec-js.py based on the wonderful content of *
 * https://github.com/WebAssembly/spec/blob/master/interpreter/host/js.ml */
'use strict';

let soft_validate = true;

let spectest = {
  print: print || ((...xs) => console.log(...xs)),
  global: 666,
  table: new WebAssembly.Table({initial: 10, maximum: 20, element: 'anyfunc'}),
  memory: new WebAssembly.Memory({initial: 1, maximum: 2}),};

let registry = {spectest};
let $$;

function register(name, instance) {
  registry[name] = instance.exports;
}

function module(bytes) {
  let buffer = new ArrayBuffer(bytes.length);
  let view = new Uint8Array(buffer);
  for (let i = 0; i < bytes.length; ++i) {
    view[i] = bytes.charCodeAt(i);
  }
  return new WebAssembly.Module(buffer);
}

function instance(bytes, imports = registry) {
  return new WebAssembly.Instance(module(bytes), imports);
}

function assert_malformed(bytes) {
  try { module(bytes) } catch (e) {
    if (e instanceof WebAssembly.CompileError) return;
  }
  throw new Error("Wasm decoding failure expected");
}

function assert_invalid(bytes) {
  try { module(bytes) } catch (e) {
    if (e instanceof WebAssembly.CompileError) return;
  }
  throw new Error("Wasm validation failure expected");
}

function assert_soft_invalid(bytes) {
  try { module(bytes) } catch (e) {
    if (e instanceof WebAssembly.CompileError) return;
    throw new Error("Wasm validation failure expected");
  }
  if (soft_validate)
    throw new Error("Wasm validation failure expected");
}

function assert_unlinkable(bytes) {
  let mod = module(bytes);
  try { new WebAssembly.Instance(mod, registry) } catch (e) {
    if (e instanceof TypeError) return;
  }
  throw new Error("Wasm linking failure expected");
}

function assert_uninstantiable(bytes) {
  let mod = module(bytes);
  try { new WebAssembly.Instance(mod, registry) } catch (e) {
    if (e instanceof WebAssembly.RuntimeError) return;
  }
  throw new Error("Wasm trap expected");
}

function assert_trap(action) {
  try { action() } catch (e) {
    if (e instanceof WebAssembly.RuntimeError) return;
  }
  throw new Error("Wasm trap expected");
}

function assert_return(action, expected) {
  let actual = action();
  if (!Object.is(actual, expected)) {
    throw new Error("Wasm return value " + expected + " expected, got " + actual);
  };
}

function assert_return_nan(action) {
  let actual = action();
  if (!Number.isNaN(actual)) {
    throw new Error("Wasm return value NaN expected, got " + actual);
  };
}

let f32 = Math.fround;

$$ = instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x10\x03\x60\x02\x7f\x7f\x01\x7f\x60\x02\x7e\x7e\x01\x7f\x60\x00\x00\x03\x07\x06\x00\x00\x01\x01\x02\x02\x07\x83\x01\x06\x18\x69\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x63\x6d\x70\x5f\x73\x5f\x6f\x66\x66\x73\x65\x74\x00\x00\x18\x69\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x63\x6d\x70\x5f\x75\x5f\x6f\x66\x66\x73\x65\x74\x00\x01\x18\x69\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x63\x6d\x70\x5f\x73\x5f\x6f\x66\x66\x73\x65\x74\x00\x02\x18\x69\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x63\x6d\x70\x5f\x75\x5f\x6f\x66\x66\x73\x65\x74\x00\x03\x08\x61\x73\x73\x65\x72\x74\x5f\x30\x00\x04\x08\x61\x73\x73\x65\x72\x74\x5f\x31\x00\x05\x0a\x6a\x06\x0d\x00\x20\x00\x41\x01\x6a\x20\x01\x41\x01\x6a\x48\x0b\x0d\x00\x20\x00\x41\x01\x6a\x20\x01\x41\x01\x6a\x49\x0b\x0d\x00\x20\x00\x42\x01\x7c\x20\x01\x42\x01\x7c\x53\x0b\x0d\x00\x20\x00\x42\x01\x7c\x20\x01\x42\x01\x7c\x54\x0b\x1c\x00\x02\x40\x42\xff\xff\xff\xff\xff\xff\xff\xff\xff\x00\x42\x00\x10\x02\x41\x01\x46\x45\x0d\x00\x0f\x0b\x00\x0b\x13\x00\x02\x40\x42\x7f\x42\x00\x10\x03\x41\x01\x46\x45\x0d\x00\x0f\x0b\x00\x0b");
assert_return(() => $$.exports["i32.no_fold_cmp_s_offset"](2147483647, 0), 1);
assert_return(() => $$.exports["i32.no_fold_cmp_u_offset"](-1, 0), 1);
assert_return(() => $$.exports["assert_0"]());
assert_return(() => $$.exports["assert_1"]());
$$ = instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x09\x02\x60\x01\x7e\x01\x7e\x60\x00\x00\x03\x04\x03\x00\x01\x01\x07\x33\x03\x19\x69\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x77\x72\x61\x70\x5f\x65\x78\x74\x65\x6e\x64\x5f\x73\x00\x00\x08\x61\x73\x73\x65\x72\x74\x5f\x30\x00\x01\x08\x61\x73\x73\x65\x72\x74\x5f\x31\x00\x02\x0a\x43\x03\x06\x00\x20\x00\xa7\xac\x0b\x1c\x00\x02\x40\x42\xf0\xc0\xc1\x82\x84\x86\x88\x08\x10\x00\x42\xf0\xc0\xc1\x82\x04\x51\x45\x0d\x00\x0f\x0b\x00\x0b\x1d\x00\x02\x40\x42\xa0\xe1\x83\x87\x8d\x98\xac\xd0\x00\x10\x00\x42\xa0\xe1\x83\x87\x7d\x51\x45\x0d\x00\x0f\x0b\x00\x0b");
assert_return(() => $$.exports["assert_0"]());
assert_return(() => $$.exports["assert_1"]());
$$ = instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x09\x02\x60\x01\x7e\x01\x7e\x60\x00\x00\x03\x03\x02\x00\x01\x07\x28\x02\x19\x69\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x77\x72\x61\x70\x5f\x65\x78\x74\x65\x6e\x64\x5f\x75\x00\x00\x08\x61\x73\x73\x65\x72\x74\x5f\x30\x00\x01\x0a\x25\x02\x06\x00\x20\x00\xa7\xad\x0b\x1c\x00\x02\x40\x42\xf0\xc0\xc1\x82\x84\x86\x88\x08\x10\x00\x42\xf0\xc0\xc1\x82\x04\x51\x45\x0d\x00\x0f\x0b\x00\x0b");
assert_return(() => $$.exports["assert_0"]());
$$ = instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x0e\x03\x60\x01\x7f\x01\x7f\x60\x01\x7e\x01\x7e\x60\x00\x00\x03\x07\x06\x00\x00\x01\x01\x02\x02\x07\x77\x06\x15\x69\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x73\x68\x6c\x5f\x73\x68\x72\x5f\x73\x00\x00\x15\x69\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x73\x68\x6c\x5f\x73\x68\x72\x5f\x75\x00\x01\x15\x69\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x73\x68\x6c\x5f\x73\x68\x72\x5f\x73\x00\x02\x15\x69\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x73\x68\x6c\x5f\x73\x68\x72\x5f\x75\x00\x03\x08\x61\x73\x73\x65\x72\x74\x5f\x30\x00\x04\x08\x61\x73\x73\x65\x72\x74\x5f\x31\x00\x05\x0a\x63\x06\x0a\x00\x20\x00\x41\x01\x74\x41\x01\x75\x0b\x0a\x00\x20\x00\x41\x01\x74\x41\x01\x76\x0b\x0a\x00\x20\x00\x42\x01\x86\x42\x01\x87\x0b\x0a\x00\x20\x00\x42\x01\x86\x42\x01\x88\x0b\x1a\x00\x02\x40\x42\x80\x80\x80\x80\x80\x80\x80\x80\x80\x7f\x10\x02\x42\x00\x51\x45\x0d\x00\x0f\x0b\x00\x0b\x1a\x00\x02\x40\x42\x80\x80\x80\x80\x80\x80\x80\x80\x80\x7f\x10\x03\x42\x00\x51\x45\x0d\x00\x0f\x0b\x00\x0b");
assert_return(() => $$.exports["i32.no_fold_shl_shr_s"](-2147483648), 0);
assert_return(() => $$.exports["i32.no_fold_shl_shr_u"](-2147483648), 0);
assert_return(() => $$.exports["assert_0"]());
assert_return(() => $$.exports["assert_1"]());
$$ = instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x0e\x03\x60\x01\x7f\x01\x7f\x60\x01\x7e\x01\x7e\x60\x00\x00\x03\x07\x06\x00\x00\x01\x01\x02\x02\x07\x77\x06\x15\x69\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x73\x68\x72\x5f\x73\x5f\x73\x68\x6c\x00\x00\x15\x69\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x73\x68\x72\x5f\x75\x5f\x73\x68\x6c\x00\x01\x15\x69\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x73\x68\x72\x5f\x73\x5f\x73\x68\x6c\x00\x02\x15\x69\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x73\x68\x72\x5f\x75\x5f\x73\x68\x6c\x00\x03\x08\x61\x73\x73\x65\x72\x74\x5f\x30\x00\x04\x08\x61\x73\x73\x65\x72\x74\x5f\x31\x00\x05\x0a\x51\x06\x0a\x00\x20\x00\x41\x01\x75\x41\x01\x74\x0b\x0a\x00\x20\x00\x41\x01\x76\x41\x01\x74\x0b\x0a\x00\x20\x00\x42\x01\x87\x42\x01\x86\x0b\x0a\x00\x20\x00\x42\x01\x88\x42\x01\x86\x0b\x11\x00\x02\x40\x42\x01\x10\x02\x42\x00\x51\x45\x0d\x00\x0f\x0b\x00\x0b\x11\x00\x02\x40\x42\x01\x10\x03\x42\x00\x51\x45\x0d\x00\x0f\x0b\x00\x0b");
assert_return(() => $$.exports["i32.no_fold_shr_s_shl"](1), 0);
assert_return(() => $$.exports["i32.no_fold_shr_u_shl"](1), 0);
assert_return(() => $$.exports["assert_0"]());
assert_return(() => $$.exports["assert_1"]());
$$ = instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x0e\x03\x60\x01\x7f\x01\x7f\x60\x01\x7e\x01\x7e\x60\x00\x00\x03\x07\x06\x00\x00\x01\x01\x02\x02\x07\x77\x06\x15\x69\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x64\x69\x76\x5f\x73\x5f\x6d\x75\x6c\x00\x00\x15\x69\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x64\x69\x76\x5f\x75\x5f\x6d\x75\x6c\x00\x01\x15\x69\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x64\x69\x76\x5f\x73\x5f\x6d\x75\x6c\x00\x02\x15\x69\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x64\x69\x76\x5f\x75\x5f\x6d\x75\x6c\x00\x03\x08\x61\x73\x73\x65\x72\x74\x5f\x30\x00\x04\x08\x61\x73\x73\x65\x72\x74\x5f\x31\x00\x05\x0a\x51\x06\x0a\x00\x20\x00\x41\x06\x6d\x41\x06\x6c\x0b\x0a\x00\x20\x00\x41\x06\x6e\x41\x06\x6c\x0b\x0a\x00\x20\x00\x42\x06\x7f\x42\x06\x7e\x0b\x0a\x00\x20\x00\x42\x06\x80\x42\x06\x7e\x0b\x11\x00\x02\x40\x42\x01\x10\x02\x42\x00\x51\x45\x0d\x00\x0f\x0b\x00\x0b\x11\x00\x02\x40\x42\x01\x10\x03\x42\x00\x51\x45\x0d\x00\x0f\x0b\x00\x0b");
assert_return(() => $$.exports["i32.no_fold_div_s_mul"](1), 0);
assert_return(() => $$.exports["i32.no_fold_div_u_mul"](1), 0);
assert_return(() => $$.exports["assert_0"]());
assert_return(() => $$.exports["assert_1"]());
$$ = instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x0e\x03\x60\x01\x7f\x01\x7f\x60\x01\x7e\x01\x7e\x60\x00\x00\x03\x07\x06\x00\x00\x01\x01\x02\x02\x07\x77\x06\x15\x69\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x6d\x75\x6c\x5f\x64\x69\x76\x5f\x73\x00\x00\x15\x69\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x6d\x75\x6c\x5f\x64\x69\x76\x5f\x75\x00\x01\x15\x69\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x6d\x75\x6c\x5f\x64\x69\x76\x5f\x73\x00\x02\x15\x69\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x6d\x75\x6c\x5f\x64\x69\x76\x5f\x75\x00\x03\x08\x61\x73\x73\x65\x72\x74\x5f\x30\x00\x04\x08\x61\x73\x73\x65\x72\x74\x5f\x31\x00\x05\x0a\x63\x06\x0a\x00\x20\x00\x41\x06\x6c\x41\x06\x6d\x0b\x0a\x00\x20\x00\x41\x06\x6c\x41\x06\x6e\x0b\x0a\x00\x20\x00\x42\x06\x7e\x42\x06\x7f\x0b\x0a\x00\x20\x00\x42\x06\x7e\x42\x06\x80\x0b\x1a\x00\x02\x40\x42\x80\x80\x80\x80\x80\x80\x80\x80\x80\x7f\x10\x02\x42\x00\x51\x45\x0d\x00\x0f\x0b\x00\x0b\x1a\x00\x02\x40\x42\x80\x80\x80\x80\x80\x80\x80\x80\x80\x7f\x10\x03\x42\x00\x51\x45\x0d\x00\x0f\x0b\x00\x0b");
assert_return(() => $$.exports["i32.no_fold_mul_div_s"](-2147483648), 0);
assert_return(() => $$.exports["i32.no_fold_mul_div_u"](-2147483648), 0);
assert_return(() => $$.exports["assert_0"]());
assert_return(() => $$.exports["assert_1"]());
$$ = instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x0e\x03\x60\x01\x7f\x01\x7f\x60\x01\x7e\x01\x7e\x60\x00\x00\x03\x04\x03\x00\x01\x02\x07\x38\x03\x13\x69\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x64\x69\x76\x5f\x73\x5f\x32\x00\x00\x13\x69\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x64\x69\x76\x5f\x73\x5f\x32\x00\x01\x08\x61\x73\x73\x65\x72\x74\x5f\x30\x00\x02\x0a\x23\x03\x07\x00\x20\x00\x41\x02\x6d\x0b\x07\x00\x20\x00\x42\x02\x7f\x0b\x11\x00\x02\x40\x42\x75\x10\x01\x42\x7b\x51\x45\x0d\x00\x0f\x0b\x00\x0b");
assert_return(() => $$.exports["i32.no_fold_div_s_2"](-11), -5);
assert_return(() => $$.exports["assert_0"]());
$$ = instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x0e\x03\x60\x01\x7f\x01\x7f\x60\x01\x7e\x01\x7e\x60\x00\x00\x03\x04\x03\x00\x01\x02\x07\x38\x03\x13\x69\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x72\x65\x6d\x5f\x73\x5f\x32\x00\x00\x13\x69\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x72\x65\x6d\x5f\x73\x5f\x32\x00\x01\x08\x61\x73\x73\x65\x72\x74\x5f\x30\x00\x02\x0a\x23\x03\x07\x00\x20\x00\x41\x02\x6f\x0b\x07\x00\x20\x00\x42\x02\x81\x0b\x11\x00\x02\x40\x42\x75\x10\x01\x42\x7f\x51\x45\x0d\x00\x0f\x0b\x00\x0b");
assert_return(() => $$.exports["i32.no_fold_rem_s_2"](-11), -1);
assert_return(() => $$.exports["assert_0"]());
$$ = instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x0e\x03\x60\x01\x7f\x01\x7f\x60\x01\x7e\x01\x7e\x60\x00\x00\x03\x07\x06\x00\x00\x01\x01\x02\x02\x07\x4f\x06\x0b\x69\x33\x32\x2e\x64\x69\x76\x5f\x73\x5f\x33\x00\x00\x0b\x69\x33\x32\x2e\x64\x69\x76\x5f\x75\x5f\x33\x00\x01\x0b\x69\x36\x34\x2e\x64\x69\x76\x5f\x73\x5f\x33\x00\x02\x0b\x69\x36\x34\x2e\x64\x69\x76\x5f\x75\x5f\x33\x00\x03\x08\x61\x73\x73\x65\x72\x74\x5f\x30\x00\x04\x08\x61\x73\x73\x65\x72\x74\x5f\x31\x00\x05\x0a\x35\x06\x07\x00\x20\x00\x41\x00\x6d\x0b\x07\x00\x20\x00\x41\x00\x6e\x0b\x07\x00\x20\x00\x42\x00\x7f\x0b\x07\x00\x20\x00\x42\x00\x80\x0b\x09\x00\x42\xc7\x00\x10\x02\x0c\x00\x0b\x09\x00\x42\xc7\x00\x10\x03\x0c\x00\x0b");
assert_trap(() => $$.exports["i32.div_s_3"](71));
assert_trap(() => $$.exports["i32.div_u_3"](71));
assert_trap(() => $$.exports["assert_0"]());
assert_trap(() => $$.exports["assert_1"]());
$$ = instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x0e\x03\x60\x01\x7f\x01\x7f\x60\x01\x7e\x01\x7e\x60\x00\x00\x03\x09\x08\x00\x00\x01\x01\x02\x02\x02\x02\x07\x65\x08\x0b\x69\x33\x32\x2e\x64\x69\x76\x5f\x73\x5f\x33\x00\x00\x0b\x69\x33\x32\x2e\x64\x69\x76\x5f\x75\x5f\x33\x00\x01\x0b\x69\x36\x34\x2e\x64\x69\x76\x5f\x73\x5f\x33\x00\x02\x0b\x69\x36\x34\x2e\x64\x69\x76\x5f\x75\x5f\x33\x00\x03\x08\x61\x73\x73\x65\x72\x74\x5f\x30\x00\x04\x08\x61\x73\x73\x65\x72\x74\x5f\x31\x00\x05\x08\x61\x73\x73\x65\x72\x74\x5f\x32\x00\x06\x08\x61\x73\x73\x65\x72\x74\x5f\x33\x00\x07\x0a\x8c\x01\x08\x07\x00\x20\x00\x41\x03\x6d\x0b\x07\x00\x20\x00\x41\x03\x6e\x0b\x07\x00\x20\x00\x42\x03\x7f\x0b\x07\x00\x20\x00\x42\x03\x80\x0b\x12\x00\x02\x40\x42\xc7\x00\x10\x02\x42\x17\x51\x45\x0d\x00\x0f\x0b\x00\x0b\x21\x00\x02\x40\x42\x80\x80\x80\x80\x80\x80\x80\x80\x30\x10\x02\x42\x80\x80\x80\x80\x80\x80\x80\x80\x10\x51\x45\x0d\x00\x0f\x0b\x00\x0b\x12\x00\x02\x40\x42\xc7\x00\x10\x03\x42\x17\x51\x45\x0d\x00\x0f\x0b\x00\x0b\x22\x00\x02\x40\x42\x80\x80\x80\x80\x80\x80\x80\x80\x40\x10\x03\x42\x80\x80\x80\x80\x80\x80\x80\x80\xc0\x00\x51\x45\x0d\x00\x0f\x0b\x00\x0b");
assert_return(() => $$.exports["i32.div_s_3"](71), 23);
assert_return(() => $$.exports["i32.div_s_3"](1610612736), 536870912);
assert_return(() => $$.exports["i32.div_u_3"](71), 23);
assert_return(() => $$.exports["i32.div_u_3"](-1073741824), 1073741824);
assert_return(() => $$.exports["assert_0"]());
assert_return(() => $$.exports["assert_1"]());
assert_return(() => $$.exports["assert_2"]());
assert_return(() => $$.exports["assert_3"]());
$$ = instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x0e\x03\x60\x01\x7f\x01\x7f\x60\x01\x7e\x01\x7e\x60\x00\x00\x03\x09\x08\x00\x00\x01\x01\x02\x02\x02\x02\x07\x65\x08\x0b\x69\x33\x32\x2e\x64\x69\x76\x5f\x73\x5f\x35\x00\x00\x0b\x69\x33\x32\x2e\x64\x69\x76\x5f\x75\x5f\x35\x00\x01\x0b\x69\x36\x34\x2e\x64\x69\x76\x5f\x73\x5f\x35\x00\x02\x0b\x69\x36\x34\x2e\x64\x69\x76\x5f\x75\x5f\x35\x00\x03\x08\x61\x73\x73\x65\x72\x74\x5f\x30\x00\x04\x08\x61\x73\x73\x65\x72\x74\x5f\x31\x00\x05\x08\x61\x73\x73\x65\x72\x74\x5f\x32\x00\x06\x08\x61\x73\x73\x65\x72\x74\x5f\x33\x00\x07\x0a\x8d\x01\x08\x07\x00\x20\x00\x41\x05\x6d\x0b\x07\x00\x20\x00\x41\x05\x6e\x0b\x07\x00\x20\x00\x42\x05\x7f\x0b\x07\x00\x20\x00\x42\x05\x80\x0b\x12\x00\x02\x40\x42\xc7\x00\x10\x02\x42\x0e\x51\x45\x0d\x00\x0f\x0b\x00\x0b\x22\x00\x02\x40\x42\x80\x80\x80\x80\x80\x80\x80\x80\xd0\x00\x10\x02\x42\x80\x80\x80\x80\x80\x80\x80\x80\x10\x51\x45\x0d\x00\x0f\x0b\x00\x0b\x12\x00\x02\x40\x42\xc7\x00\x10\x03\x42\x0e\x51\x45\x0d\x00\x0f\x0b\x00\x0b\x22\x00\x02\x40\x42\x80\x80\x80\x80\x80\x80\x80\x80\xa0\x7f\x10\x03\x42\x80\x80\x80\x80\x80\x80\x80\x80\x20\x51\x45\x0d\x00\x0f\x0b\x00\x0b");
assert_return(() => $$.exports["i32.div_s_5"](71), 14);
assert_return(() => $$.exports["i32.div_s_5"](1342177280), 268435456);
assert_return(() => $$.exports["i32.div_u_5"](71), 14);
assert_return(() => $$.exports["i32.div_u_5"](-1610612736), 536870912);
assert_return(() => $$.exports["assert_0"]());
assert_return(() => $$.exports["assert_1"]());
assert_return(() => $$.exports["assert_2"]());
assert_return(() => $$.exports["assert_3"]());
$$ = instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x0e\x03\x60\x01\x7f\x01\x7f\x60\x01\x7e\x01\x7e\x60\x00\x00\x03\x09\x08\x00\x00\x01\x01\x02\x02\x02\x02\x07\x65\x08\x0b\x69\x33\x32\x2e\x64\x69\x76\x5f\x73\x5f\x37\x00\x00\x0b\x69\x33\x32\x2e\x64\x69\x76\x5f\x75\x5f\x37\x00\x01\x0b\x69\x36\x34\x2e\x64\x69\x76\x5f\x73\x5f\x37\x00\x02\x0b\x69\x36\x34\x2e\x64\x69\x76\x5f\x75\x5f\x37\x00\x03\x08\x61\x73\x73\x65\x72\x74\x5f\x30\x00\x04\x08\x61\x73\x73\x65\x72\x74\x5f\x31\x00\x05\x08\x61\x73\x73\x65\x72\x74\x5f\x32\x00\x06\x08\x61\x73\x73\x65\x72\x74\x5f\x33\x00\x07\x0a\x8c\x01\x08\x07\x00\x20\x00\x41\x07\x6d\x0b\x07\x00\x20\x00\x41\x07\x6e\x0b\x07\x00\x20\x00\x42\x07\x7f\x0b\x07\x00\x20\x00\x42\x07\x80\x0b\x12\x00\x02\x40\x42\xc7\x00\x10\x02\x42\x0a\x51\x45\x0d\x00\x0f\x0b\x00\x0b\x22\x00\x02\x40\x42\x80\x80\x80\x80\x80\x80\x80\x80\xf0\x00\x10\x02\x42\x80\x80\x80\x80\x80\x80\x80\x80\x10\x51\x45\x0d\x00\x0f\x0b\x00\x0b\x12\x00\x02\x40\x42\xc7\x00\x10\x03\x42\x0a\x51\x45\x0d\x00\x0f\x0b\x00\x0b\x21\x00\x02\x40\x42\x80\x80\x80\x80\x80\x80\x80\x80\x60\x10\x03\x42\x80\x80\x80\x80\x80\x80\x80\x80\x20\x51\x45\x0d\x00\x0f\x0b\x00\x0b");
assert_return(() => $$.exports["i32.div_s_7"](71), 10);
assert_return(() => $$.exports["i32.div_s_7"](1879048192), 268435456);
assert_return(() => $$.exports["i32.div_u_7"](71), 10);
assert_return(() => $$.exports["i32.div_u_7"](-536870912), 536870912);
assert_return(() => $$.exports["assert_0"]());
assert_return(() => $$.exports["assert_1"]());
assert_return(() => $$.exports["assert_2"]());
assert_return(() => $$.exports["assert_3"]());
$$ = instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x0e\x03\x60\x01\x7f\x01\x7f\x60\x01\x7e\x01\x7e\x60\x00\x00\x03\x09\x08\x00\x00\x01\x01\x02\x02\x02\x02\x07\x65\x08\x0b\x69\x33\x32\x2e\x72\x65\x6d\x5f\x73\x5f\x33\x00\x00\x0b\x69\x33\x32\x2e\x72\x65\x6d\x5f\x75\x5f\x33\x00\x01\x0b\x69\x36\x34\x2e\x72\x65\x6d\x5f\x73\x5f\x33\x00\x02\x0b\x69\x36\x34\x2e\x72\x65\x6d\x5f\x75\x5f\x33\x00\x03\x08\x61\x73\x73\x65\x72\x74\x5f\x30\x00\x04\x08\x61\x73\x73\x65\x72\x74\x5f\x31\x00\x05\x08\x61\x73\x73\x65\x72\x74\x5f\x32\x00\x06\x08\x61\x73\x73\x65\x72\x74\x5f\x33\x00\x07\x0a\x7b\x08\x07\x00\x20\x00\x41\x03\x6f\x0b\x07\x00\x20\x00\x41\x03\x70\x0b\x07\x00\x20\x00\x42\x03\x81\x0b\x07\x00\x20\x00\x42\x03\x82\x0b\x12\x00\x02\x40\x42\xc7\x00\x10\x02\x42\x02\x51\x45\x0d\x00\x0f\x0b\x00\x0b\x19\x00\x02\x40\x42\x80\x80\x80\x80\x80\x80\x80\x80\x30\x10\x02\x42\x00\x51\x45\x0d\x00\x0f\x0b\x00\x0b\x12\x00\x02\x40\x42\xc7\x00\x10\x03\x42\x02\x51\x45\x0d\x00\x0f\x0b\x00\x0b\x19\x00\x02\x40\x42\x80\x80\x80\x80\x80\x80\x80\x80\x40\x10\x03\x42\x00\x51\x45\x0d\x00\x0f\x0b\x00\x0b");
assert_return(() => $$.exports["i32.rem_s_3"](71), 2);
assert_return(() => $$.exports["i32.rem_s_3"](1610612736), 0);
assert_return(() => $$.exports["i32.rem_u_3"](71), 2);
assert_return(() => $$.exports["i32.rem_u_3"](-1073741824), 0);
assert_return(() => $$.exports["assert_0"]());
assert_return(() => $$.exports["assert_1"]());
assert_return(() => $$.exports["assert_2"]());
assert_return(() => $$.exports["assert_3"]());
$$ = instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x0e\x03\x60\x01\x7f\x01\x7f\x60\x01\x7e\x01\x7e\x60\x00\x00\x03\x09\x08\x00\x00\x01\x01\x02\x02\x02\x02\x07\x65\x08\x0b\x69\x33\x32\x2e\x72\x65\x6d\x5f\x73\x5f\x35\x00\x00\x0b\x69\x33\x32\x2e\x72\x65\x6d\x5f\x75\x5f\x35\x00\x01\x0b\x69\x36\x34\x2e\x72\x65\x6d\x5f\x73\x5f\x35\x00\x02\x0b\x69\x36\x34\x2e\x72\x65\x6d\x5f\x75\x5f\x35\x00\x03\x08\x61\x73\x73\x65\x72\x74\x5f\x30\x00\x04\x08\x61\x73\x73\x65\x72\x74\x5f\x31\x00\x05\x08\x61\x73\x73\x65\x72\x74\x5f\x32\x00\x06\x08\x61\x73\x73\x65\x72\x74\x5f\x33\x00\x07\x0a\x7d\x08\x07\x00\x20\x00\x41\x05\x6f\x0b\x07\x00\x20\x00\x41\x05\x70\x0b\x07\x00\x20\x00\x42\x05\x81\x0b\x07\x00\x20\x00\x42\x05\x82\x0b\x12\x00\x02\x40\x42\xc7\x00\x10\x02\x42\x01\x51\x45\x0d\x00\x0f\x0b\x00\x0b\x1a\x00\x02\x40\x42\x80\x80\x80\x80\x80\x80\x80\x80\xd0\x00\x10\x02\x42\x00\x51\x45\x0d\x00\x0f\x0b\x00\x0b\x12\x00\x02\x40\x42\xc7\x00\x10\x03\x42\x01\x51\x45\x0d\x00\x0f\x0b\x00\x0b\x1a\x00\x02\x40\x42\x80\x80\x80\x80\x80\x80\x80\x80\xa0\x7f\x10\x03\x42\x00\x51\x45\x0d\x00\x0f\x0b\x00\x0b");
assert_return(() => $$.exports["i32.rem_s_5"](71), 1);
assert_return(() => $$.exports["i32.rem_s_5"](1342177280), 0);
assert_return(() => $$.exports["i32.rem_u_5"](71), 1);
assert_return(() => $$.exports["i32.rem_u_5"](-1610612736), 0);
assert_return(() => $$.exports["assert_0"]());
assert_return(() => $$.exports["assert_1"]());
assert_return(() => $$.exports["assert_2"]());
assert_return(() => $$.exports["assert_3"]());
$$ = instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x0e\x03\x60\x01\x7f\x01\x7f\x60\x01\x7e\x01\x7e\x60\x00\x00\x03\x09\x08\x00\x00\x01\x01\x02\x02\x02\x02\x07\x65\x08\x0b\x69\x33\x32\x2e\x72\x65\x6d\x5f\x73\x5f\x37\x00\x00\x0b\x69\x33\x32\x2e\x72\x65\x6d\x5f\x75\x5f\x37\x00\x01\x0b\x69\x36\x34\x2e\x72\x65\x6d\x5f\x73\x5f\x37\x00\x02\x0b\x69\x36\x34\x2e\x72\x65\x6d\x5f\x75\x5f\x37\x00\x03\x08\x61\x73\x73\x65\x72\x74\x5f\x30\x00\x04\x08\x61\x73\x73\x65\x72\x74\x5f\x31\x00\x05\x08\x61\x73\x73\x65\x72\x74\x5f\x32\x00\x06\x08\x61\x73\x73\x65\x72\x74\x5f\x33\x00\x07\x0a\x7c\x08\x07\x00\x20\x00\x41\x07\x6f\x0b\x07\x00\x20\x00\x41\x07\x70\x0b\x07\x00\x20\x00\x42\x07\x81\x0b\x07\x00\x20\x00\x42\x07\x82\x0b\x12\x00\x02\x40\x42\xc7\x00\x10\x02\x42\x01\x51\x45\x0d\x00\x0f\x0b\x00\x0b\x1a\x00\x02\x40\x42\x80\x80\x80\x80\x80\x80\x80\x80\xf0\x00\x10\x02\x42\x00\x51\x45\x0d\x00\x0f\x0b\x00\x0b\x12\x00\x02\x40\x42\xc7\x00\x10\x03\x42\x01\x51\x45\x0d\x00\x0f\x0b\x00\x0b\x19\x00\x02\x40\x42\x80\x80\x80\x80\x80\x80\x80\x80\x60\x10\x03\x42\x00\x51\x45\x0d\x00\x0f\x0b\x00\x0b");
assert_return(() => $$.exports["i32.rem_s_7"](71), 1);
assert_return(() => $$.exports["i32.rem_s_7"](1879048192), 0);
assert_return(() => $$.exports["i32.rem_u_7"](71), 1);
assert_return(() => $$.exports["i32.rem_u_7"](-536870912), 0);
assert_return(() => $$.exports["assert_0"]());
assert_return(() => $$.exports["assert_1"]());
assert_return(() => $$.exports["assert_2"]());
assert_return(() => $$.exports["assert_3"]());
