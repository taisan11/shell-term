import { Buffer } from "@std/io";
import { ensureDirSync } from "@std/fs";

/**
 * Download file from url to the destination
 *
 * @param input - either an url string or fetch request object
 * @param destination
 * @param options
 * @returns
 */
export async function download(
    input: string | Request,
    destination?: Destination,
    options?: RequestInit,
  ): Promise<DownloadedFile> {
    const response = await fetch(input, options);
    if (response.status !== 200) {
      throw new Deno.errors.Http(
        `status ${response.status}-'${response.statusText}' received instead of 200`,
      );
    }
  
    const finalUrl = response.url.replace(/\/$/, "");
    const blob = await response.blob();
    /** size in bytes */
    const size = blob.size;
    const buffer = await blob.arrayBuffer();
    const unit8arr = new Buffer(buffer).bytes();
  
    // ?. operator - returns undefined, if destination is undefined
    // ?.dir expression - returns undefined, when dir prop is undefined
    // ?? operator -  returns the right side expression, when left side is undefined
    let dir = destination?.dir ?? Deno.makeTempDirSync({ prefix: "deno_dwld" });
    const file = destination?.file ??
      finalUrl.substring(finalUrl.lastIndexOf("/") + 1);
    const mode = (destination?.mode !== undefined)
      ? { mode: destination.mode }
      : {};
  
    dir = dir.replace(/\/$/, "");
    ensureDirSync(dir);
  
    const fullPath = `${dir}/${file}`;
    await Deno.writeFile(fullPath, unit8arr, mode);
    return { file, dir, fullPath, size };
  }

  export interface Destination {
    dir?: string;
    file?: string;
    mode?: number;
  }
  
  export interface DownloadedFile {
    file: string;
    dir: string;
    fullPath: string;
    size: number;
  }