import Link from "next/link";

const routes = [ "Pokemon", "Movies", "Games", "Geography", "Cars"];

export default function Home() {
    // let data = await fetch('http://localhost:3000/api/hello').then((res)=> res.json());
    
    
    return (
        <div className="grid grid-cols-2 gap-4 lg:h-auto">
            { routes.map((route) => {
                return (
                    <Link className="p-4 border border-slate-500 hover:bg-slate-800" key={route} href={`/quiz/${route}`}>{route}</Link>
                );
            })}
        </div>
    );
}