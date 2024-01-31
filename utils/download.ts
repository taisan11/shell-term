import { download } from "https://deno.land/x/download@v2.0.2/mod.ts";
import { Logger } from "./log.ts"
export async function DL(subc:string[]){
const url = subc[1];
const fileName = "test.txt";
const dir = "./app/";

try {
    await download(url, { file: fileName, dir });
  } catch (err) {
    Logger.log("error",err)
  }
}