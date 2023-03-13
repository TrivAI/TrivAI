"use client";
import { useRef } from "react";
import { useStore } from "../../src/store"; 

// fetch(`${checkEnvironment(" coming from storeinitial.ts")}/api/cheat`).then(res => res.json()).then(data => {
//     console.log("checking if data is here from storeinitial.ts");
//     console.log(data);
//     newdata = data.cheatUsed;
//     return createStoreHook(data.cheatUsed);
// });
// import { create } from 'zustand';

// export const useStore = create<{
//     name: string;
//     count: number;
//     inc: () => void;
// }>(set => ({
//     name: 'Victor',
//     count: 0,
//     inc: () => set(state  => {return { count: state.count + 1 } } ),
// }));

// console.log("run from store.ts");

// import { useRef } from 'react';

// function increment(num: number) : number {
//     return num +1;
// }
export default function StoreInitializer({cheatUsed}: {cheatUsed: boolean}) {
    const initialized = useRef(false);
    if (!initialized.current) {

        initialized.current = true;
        useStore.setState({cheatUsed: cheatUsed});
    }
    return null;
}

