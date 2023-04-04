import { notFound } from "next/navigation";
import { useStore } from "../../../src/store";
import checkEnvironment from "../../../src/checkEnvironment";

import ClientPokemon from "./ClientPokemon";
import QuizTabSwitcher from "../QuizTabSwitcher";
import ClientMovie from "./ClientMovie";

interface Routes {
  [key: string]: JSX.Element;
}

export default async function Page({ params }: { params: { toquiz: string } }) {

  const routes: Routes = {
    Pokemon: <ClientPokemon/>,
    Movies: <ClientMovie />,
  };

  return (
    <>
      <QuizTabSwitcher />
      <main className="">
        {routes[params.toquiz] ? routes[params.toquiz] : notFound()}
      </main>
    </>
  );
}
