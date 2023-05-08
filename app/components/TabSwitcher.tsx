import NavLink from "./NavLink";


export default function TabSwitcher( {routes} : {routes: string[]} ) {
    let style = "tab tab-lg transition ease-in";
    let conditionalStyle = "tab-active !text-blue-500";
    const baseRoute = "/quiz";
    return (
        <div data-theme="black" className="m-auto tabs col-span-3 w-max">
            {
                routes.map((route) => {
                    return (
                        <NavLink 
                            key={route} 
                            href={`${baseRoute}/${route}`} 
                            style={style} 
                            conditionalStyle={conditionalStyle}>
                                <b>{route.charAt(0).toUpperCase() + route.slice(1)}</b>
                        </NavLink>
                    );
                })
            }
        </div>
    );
}