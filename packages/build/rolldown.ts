import { defineRolldown } from "../../lib/define/define";

export const $config = defineRolldown('defineConfig', (await import('rolldown')).default.defineConfig).define
export const $parallelPlugin = defineRolldown("defineParallelPlugin", (await import('rolldown')).default.defineParallelPlugin).define
export const $scan = defineRolldown("experimental_scan", (await import('rolldown')).default.experimental_scan).define
export const $rolldown = defineRolldown("rolldown", (await import('rolldown')).default.rolldown).define
