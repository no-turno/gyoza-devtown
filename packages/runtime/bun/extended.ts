import { spawnSync } from "child_process";
import { defineBun } from "../../../lib/define/define";

export const which = defineBun('which', 'Bun' in globalThis && process.isBun ? globalThis.Bun.which : (path: string) => {
    return spawnSync(`which ${path}`, {
        shell: true,
        stdio: 'pipe',
        encoding: "utf-8"
    }).stdout.toString().trim()
}).define


export const $ = defineBun('$', 'Bun' in globalThis && process.isBun ? globalThis.Bun.$ : async (command: TemplateStringsArray | string, ...expressions: string[]) => {
    return spawnSync([command, ...expressions].join(' '), {
        shell: which(command.toString())?.toString(),
        stdio: 'pipe',
        encoding: "utf-8"
    }).stdout.toString().trim()
}).define;

export const FileSystemRouter = defineBun('FileSystemRouter', 'Bun' in globalThis && process.isBun ? globalThis.Bun.FileSystemRouter : {}).define;

export const gc = defineBun('gc', 'Bun' in globalThis && process.isBun ? globalThis.Bun.gc : (bool: Boolean) => {
    return bool
}).define;

export const env = defineBun('env', {
    get NODE_ENV() {
        return process.env.NODE_ENV
    },
    get RUNTIME() {
        return process.isBun ? 'bun' : 'node'
    }
} as Record<string, string>).define;
