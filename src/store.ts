import { create } from 'zustand';

export default function createStoreHook() {
    return create<{
        name: string;
        count: number;
        inc: () => void;
    }>(set => ({
        name: 'Victor',
        count: 0,
        inc: () => set(state  => {return { count: state.count + 1 } } ),
    }));
}

console.log("run from store.ts");