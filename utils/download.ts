import { download } from "https://deno.land/x/download@v2.0.2/mod.ts";
export async function DL(){
const url =
  "https://raw.githubusercontent.com/denolib/high-res-deno-logo/master/deno_hr.png";
const fileName = "deno.png";
const dir = ".";

await download(url, { file: fileName, dir });
}