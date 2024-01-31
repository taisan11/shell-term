import { Logger } from "./utils/log.ts"
import { Input } from "./utils/input.ts"
import { DL } from "./utils/download.ts"
import * as z from "https://deno.land/x/zod@v3.22.4/mod.ts"
Logger.log("info","Hello")
export async function main(a:string,n:number,dev?:boolean) {
    const asub = a.split(" ")
    const amain = asub[0]
    switch (amain) {
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
            await DL(asub)
            break;
        case "dev:reload":
            console.log("reload")
            n++
            return n
        default:
            if (a==="test") {
                const Module = await import("./app/test.ts")
                Module.default()
            }else {
                console.log("command not found")
            }
            break;
    }
}