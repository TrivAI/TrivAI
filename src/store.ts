import { create } from 'zustand';
import {checkEnvironment} from './checkEnvironment';

interface Store {
    name: string;
    count: number;
    cheatUsed?: any;
    inc: () => void;
    removeCheat: () => void;
}


export const useStore = create<Store>(set => ({
    name: 'Victor',
    count: 0,
    // cheatUsed: true,
    initCheat: async () => {
        const response = await fetch(`${checkEnvironment()}/api/cheat`);
        set({cheatUsed: response.json().then(data => data.cheatUsed)})
    },
    inc: () => set(state  => {return { count: state.count + 1 } } ),
    removeCheat: async () => {
        const response = await fetch(`${checkEnvironment()}/api/cheat`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({cheatUsed: true})
        });
        set({cheatUsed: response.json().then(data => data.cheatUsed)})
    }
}));

console.log("run from store.ts"); 