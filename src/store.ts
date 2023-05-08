import { create } from 'zustand';
import checkEnvironment from './checkEnvironment';

export type UserState = {
    id: string;
    name: string;
    totalScore: number;
    image: string;
    cheatUsed: boolean;
}

export type Actions = {
    incrementScore: (pointAmount : number) => void;
    removeCheat: () => void;
    resetScore: () => void;
    deleteAccount: () => void;
}

const initialState: UserState = {
  id: "",
  name: "",
  totalScore: 0,
  image: "",
  cheatUsed: false,
}

export const useStore = create<UserState & Actions>((set, get) => ({
    ...initialState,
    id: '',
    name: '',
    totalScore: 0,
    cheatUsed: false,
    image: '',
    incrementScore: async (pointAmount) => {
        const response = await fetch(new URL("/api/score", checkEnvironment()), {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id: get().id, totalScore: get().totalScore + pointAmount})
        });
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        let score = await response.json().then(data => data.totalScore); 
        set({totalScore: score});
    },
    removeCheat: async () => {
        const response = await fetch(new URL("/api/cheat", checkEnvironment()), {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id: get().id, cheatUsed: get().cheatUsed})
        });
        if (!response.ok) {
            throw new Error(response.statusText);
        } 
        set({cheatUsed: await response.json().then(data => data.cheatUsed)});
    },
    resetScore: async () => {
        let response; 
        try {
            response = await fetch(new URL("/api/resetScore", checkEnvironment()), {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({id: get().id, totalScore: 0})
            });
            if (!response.ok) {
                throw new Error(response.statusText);
            }  
            set({totalScore: await response.json().then(data => data.totalScore)});
        }
        catch(e) {
            alert("Nextwork Error");
            console.log(e);
        }
    },
    deleteAccount: async () => {
        let response; 
        try {
            response = await fetch(new URL(`/api/delete/${get().id}`, checkEnvironment()), {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error(response.statusText);
            }  
            set(initialState);      
        }
        catch(e) {
            alert("Nextwork Error");
            console.log(e);
        }
    }
}));

console.log("run from store.ts"); 