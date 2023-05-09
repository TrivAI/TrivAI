import NavLink from "./NavLink";


export default function TabSwitcher( {routes} : {routes: string[]} ) {
    let style = "text-xl text-gray-500 text-center hover:text-blue-500";
    let conditionalStyle = "!text-blue-500";
    const baseRoute = "/quiz";
    return (
      <div
        data-theme=""
        className="mx-auto my-6 grid grid-cols-3 gap-4 md:grid-cols-4 lg:grid-cols-5 lg:gap-x-10 w-max"
      >
        {routes.map((route) => {
          return (
            <NavLink
              key={route}
              href={`${baseRoute}/${route}`}
              style={style}
              conditionalStyle={conditionalStyle}
            >
              <b>{route.charAt(0).toUpperCase() + route.slice(1)}</b>
            </NavLink>
          );
        })}
      </div>
    );
}