import { init, WASI } from "https://deno.land/x/wasm@v1.2.2/wasi.ts";
export async function run() {
  await init();

  const wasi = new WASI({
    env: {},
    args: [],
  });

  const moduleBytes = fetch(
    "https://cdn.deno.land/wasm/versions/v1.0.2/raw/tests/demo.wasm",
  );
  const module = await WebAssembly.compileStreaming(moduleBytes);
  await wasi.instantiate(module, {});

  const exitCode = wasi.start();
  const stdout = wasi.getStdoutString();
  console.log(`${stdout}(exit code: ${exitCode})`);
}
