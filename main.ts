import { Logger } from "./utils/log.ts"
import { Input } from "./utils/input.ts"

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
        default:
            console.log("command not found")
            break;
    }
}