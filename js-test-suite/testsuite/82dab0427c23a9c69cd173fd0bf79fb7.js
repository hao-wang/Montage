load("201224b0d1c296b45befd2285e95dd42.js");
load("19089b69c4b129eba432c322114d8fa0.js");

setJitCompilerOption('wasm.test-mode', 1);

try {
    wasmEvalText(`

    (module
      (type $type0 (func))
      (func $func0
          (nop)
          (f64.load offset=59 align=1 (i32.const 0))
          (current_memory)
          (current_memory)
          (current_memory)
          (current_memory)
          (current_memory)
          (current_memory)
          (current_memory)
          (current_memory)
          (i64.rem_s (i64.const 17) (i64.xor (i64.const 17) (i64.xor (i64.const 17) (i64.xor (i64.xor (i64.const 17) (i64.const 17)) (i64.xor (i64.const 17) (i64.const 17))))))

         (i64.rem_s
          (i64.const 17)
          (i64.xor
            (i64.rem_s (i64.const 17) (i64.const 17))
            (i64.xor (i64.rem_s (i64.const 17) (i64.const 17)) (i64.xor (i64.const 17) (i64.const 17)))))
      )
      (memory 1 1)
    )

    `)(createI64(41));
} catch(e) {
}
