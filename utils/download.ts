import { download } from "./dl.mod.ts";
import { Logger } from "./log.ts";
export async function DL(subc: string[]) {
  const url = subc[1];
  const fileName = "test.txt";
  const dir = "./app/";

  try {
    await download(url, { file: fileName, dir });
  } catch (err) {
    Logger.log("error", err);
  }
}
