import { useStore } from "../../../src/store"; 
import checkEnvironment from "../../../src/checkEnvironment";

import ClientPokemon from "./ClientPokemon";
import QuizTabSwitcher from "../QuizTabSwitcher";
import ClientMovie from "./ClientMovie";


async function getCheatUsed() {
    const response = await fetch(new URL('/api/cheat', checkEnvironment()));
    return await response.json();
}

export default async function Page({params} : {params: {toquiz: string}}) {
    // console.log("i ran");
    // console.log(useStore.getState().cheatUsed);
    
    const {cheatUsed} : {cheatUsed : boolean} = await getCheatUsed();
    
    useStore.setState({cheatUsed: cheatUsed});
    return (
        <>
            <QuizTabSwitcher />
            <main className="">
                <p> this is cheatUsed: {`${cheatUsed}`}</p>
                <h1>hello</h1>
                {params.toquiz === 'Pokemon' ? <ClientPokemon cheat={cheatUsed}/> : ""}
                {params.toquiz === 'Movies' ? <ClientMovie cheat={cheatUsed}/> : ""}
            </main>
        </>
    );
}