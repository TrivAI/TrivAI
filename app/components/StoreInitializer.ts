"use client";
import createStoreHook from "../../src/store"; 

export const useStore = createStoreHook();
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
// export default function StoreInitializer({count, name, inc}: {count: number; name: string; inc: () => void}) {
//     const initialized = useRef(false);
//     if (!initialized.current) {

//         useStore.setState({count, name, inc});
//         initialized.current = true;
//     }
//     return null;
// }

