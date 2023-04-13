import { create } from 'zustand';
import checkEnvironment from './checkEnvironment';

export type UserState = {
    id: string;
    name: string;
    totalScore: number;
    role: string;
    image: string;
    cheatUsed?: any;
}

export type Actions = {
    initCheat: (cheat: string) => void;
    incrementScore: () => void;
    removeCheat: () => void;
}


export const useStore = create<UserState & Actions>((set, get) => ({
    id: '',
    name: '',
    totalScore: 0,
    role: '',
    cheatUsed: false,
    image: '',
    pokemon: [],
    movies: [],
    games: [],
    cars: [],
    geography: [],
    initCheat: (cheat: string) => {
        set({cheatUsed: cheat});
    },
    incrementScore: () => set(state  =>({ totalScore: state.totalScore + 1 })),
    removeCheat: async () => {
        const response = await fetch(new URL("/api/cheat", checkEnvironment()), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id: get().id, cheatUsed: get().cheatUsed})
        });
        set({cheatUsed: response.json().then(data => data.cheatUsed)});
    }
}));

console.log("run from store.ts"); 