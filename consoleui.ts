import { Input } from "./utils/input.ts";
import { main } from "./main.ts";

let n = 0;
while (n < 1) {
  const a: string = Input();
  if (a === null) {
    console.log("Input was null.");
    continue;
  }
  const res = await main(a, n);
  if (res === undefined) {
    continue;
  }
  n = res;
}
