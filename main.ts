import { Logger } from "./utils/log.ts"
import { Input } from "./utils/input.ts"
import { DL } from "./utils/download.ts"

Logger.log("info","Hello")

while (true) {
    const a = Input()
    switch (a) {
        case "exit":
            Deno.exit()
            break;
        case "help":
            console.log("help")
            break;
        case "set":
            console.log("set")
            break;
        case "download":
            console.log("DL")
            DL()
            break;
        default:
            console.log("command not found")
            break;
    }
}