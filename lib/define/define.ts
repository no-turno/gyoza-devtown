
export function defineRolldown<InterfaceId extends typeof import('rolldown'), K extends InterfaceId[keyof InterfaceId]>(id: keyof InterfaceId, define: K) {
    return { id, define }
};

export function defineBun<InterfaceId extends typeof import('bun'), K extends InterfaceId[keyof InterfaceId]>(id: keyof InterfaceId, define: K) {
    return { id, define }
};

export function defineVite<InterfaceId extends typeof import('vite'), K extends InterfaceId[keyof InterfaceId]>(id: keyof InterfaceId, define: K) {
    return { id, define }
};

export function defineRollup<InterfaceId extends typeof import('rollup'), K extends InterfaceId[keyof InterfaceId]>(id: keyof InterfaceId, define: K) {
    return { id, define }
};

export function defineAcorn<InterfaceId extends typeof import('acorn'), K extends InterfaceId[keyof InterfaceId]>(id: keyof InterfaceId, define: K) {
    return { id, define }
};

export function defineWebpack<InterfaceId extends typeof import('webpack'), K extends InterfaceId[keyof InterfaceId]>(id: keyof InterfaceId, define: K) {
    return { id, define }
};

export function defineSwc<InterfaceId extends typeof import('@swc/core'), K extends InterfaceId[keyof InterfaceId]>(id: keyof InterfaceId, define: K) {
    return { id, define }
};


export function defineTsup<InterfaceId extends typeof import('tsup'), K extends InterfaceId[keyof InterfaceId]>(id: keyof InterfaceId, define: K) {
    return {
        id, define, [Symbol.for('get')]() {
            return import(this.id.toString())
        }
    }
};



