import { useStore } from "../../../src/store"; 
import { checkEnvironment } from "@/src/checkEnvironment";

import ClientPokemon from "./ClientPokemon";
import QuizTabSwitcher from "../QuizTabSwitcher";
import ClientMovie from "./ClientMovie";


async function getCheatUsed() {
    const response = await fetch(`${checkEnvironment()}/api/cheat`);
    return await response.json();
}

export default async function Home({params, searchParams} : {params: {toquiz: string}, searchParams?: {}}) {
    // console.log("i ran");
    // console.log(useStore.getState().cheatUsed);
    const {cheatUsed} : {cheatUsed : boolean} = await getCheatUsed();

    useStore.setState({cheatUsed: cheatUsed});
    return (
        <>
            <QuizTabSwitcher />
            <main className="">
                <p> this is cheatUsed: {`${cheatUsed}`}</p>
                {params.toquiz === 'Pokemon' ? <ClientPokemon cheat={cheatUsed}/> : ""}
                {params.toquiz === 'Movies' ? <ClientMovie cheat={cheatUsed}/> : ""}
            </main>
        </>
    );
}