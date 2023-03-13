// "use client";

import NavLink from "../components/NavLink";
import {routes} from './page'

export default function QuizTabSwitcher() {
    let style = "tab sm:tab-xs md:tab lg:tab-lg tab-lifted transition ease-in";
    let conditionalStyle = "tab-active !text-[#69E4FF] !border-[#69E4FF]";
    const baseRoute = "/quiz";
    // const routes = [ "Pokemon", "Movies", "Games", "Geography", "Cars"];
    let num : number = 0;
    return (
        <div data-theme="black" className="m-auto tabs col-span-3 w-max">
            {
                routes.map((route) => {
                    return (
                        <NavLink key={route} href={`${baseRoute}/${route}`} style={style} conditionalStyle={conditionalStyle}>{route}</NavLink>
                    );
                })
            }
        </div>
    );
}