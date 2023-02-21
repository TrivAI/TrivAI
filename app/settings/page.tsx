'use client';
import {useEffect, useState} from "react";
import {useStore} from "../components/StoreInitializer";

export default function Home() {
    let [data, setData] = useState<any>();
    const SIZE = 64;
    useEffect(() => {
        fetch("/api/hello").then((res) => res.json()).then((data) => {
            setData(data);
        });
    }, []);

    function Controls() {
        const inc = useStore(state => state.inc);
        return (<button className="rounded-full border-2 border-indigo-500 p-4" onClick={inc}>one up</button>);
    }

    function Counter() {
        const count = useStore(state => state.count);
        return (<h1>{count}</h1>);
    }
    return(
        <main className="h-screen">
            <h1 className="gray-blackGradient flex pl-6 justify-center lg:justify-start" aria-label='About'>
                {/* S */}
                <svg className="animate-bounce hover:scale-150 transition" width={String(SIZE)} height={String(SIZE)} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="18" y="18" width="68" height="68" fill="black" stroke="black" strokeWidth="4" strokeLinejoin="round"/>
                    <rect x="10" y="10" width="68" height="68" fill="#DD7DFF" stroke="black" strokeWidth="4" strokeLinejoin="round"/>
                    <path d="M54 24H46C38.5817 24 34 27.5817 34 34C34 40.4183 38.5817 44 46 44C53.4183 44 58 47.5817 58 54C58 60.4183 53.4183 64 46 64H38" stroke="black" strokeWidth="8"/>
                </svg>
                {/* E */}
                <svg className="hover:scale-150 transition "width={String(SIZE)} height={String(SIZE)} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="18" y="18" width="68" height="68" fill="black" stroke="black" strokeWidth="4" strokeLinejoin="round"/>
                    <rect x="10" y="10" width="68" height="68" fill="#33c1ff" stroke="black" strokeWidth="4" strokeLinejoin="round"/>
                    <path d="M56 64L32 64" stroke="black" strokeWidth="8"/>
                    <path d="M52 42L32 42" stroke="black" strokeWidth="8"/>
                    <path d="M52 24L32 24" stroke="black" strokeWidth="8"/>
                    <path d="M32 68L32 20" stroke="black" strokeWidth="8"/>
                </svg>
                {/* T */}
                <svg className="hover:scale-150 transition" width={String(SIZE)} height={String(SIZE)} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="18" y="18" width="68" height="68" fill="black" stroke="black" strokeWidth="4" strokeLinejoin="round"/>
                    <rect x="10" y="10" width="68" height="68" fill="#88FF8A" stroke="black" strokeWidth="4" strokeLinejoin="round"/>
                    <path d="M60 24H28" stroke="black" strokeWidth="8"/>
                    <path d="M44 68L44 20" stroke="black" strokeWidth="8"/>
                </svg>
                {/* T */}
                <svg className="hover:scale-150 transition" width={String(SIZE)} height={String(SIZE)} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="18" y="18" width="68" height="68" fill="black" stroke="black" strokeWidth="4" strokeLinejoin="round"/>
                    <rect x="10" y="10" width="68" height="68" fill="#88FF8A" stroke="black" strokeWidth="4" strokeLinejoin="round"/>
                    <path d="M60 24H28" stroke="black" strokeWidth="8"/>
                    <path d="M44 68L44 20" stroke="black" strokeWidth="8"/>
                </svg>
                {/* I */}
                <svg className="hover:scale-150 transition" width={String(SIZE)} height={String(SIZE)} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="18" y="18" width="68" height="68" fill="black" stroke="black" strokeWidth="4" strokeLinejoin="round"/>
                    <rect x="10" y="10" width="68" height="68" fill="#ccb680" stroke="black" strokeWidth="4" strokeLinejoin="round"/>
                    <path d="M52 64L36 64" stroke="black" strokeWidth="8"/>
                    <path d="M44 68L44 20" stroke="black" strokeWidth="8"/>
                    <path d="M52 24L36 24" stroke="black" strokeWidth="8"/>
                </svg>
                {/* N */}
                <svg className="hover:scale-150 transition" width={String(SIZE)} height={String(SIZE)} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="18" y="18" width="68" height="68" fill="black" stroke="black" strokeWidth="4" strokeLinejoin="round"/>
                    <rect x="10" y="10" width="68" height="68" fill="#FFB443" stroke="black" strokeWidth="4" strokeLinejoin="round"/>
                    <path d="M56 66L56 22" stroke="black" strokeWidth="8"/>
                    <path d="M32 66L32 22" stroke="black" strokeWidth="8"/>
                    <path d="M56 66L32 22" stroke="black" strokeWidth="8"/>
                </svg>
                {/* G */}
                <svg className="hover:scale-150 transition" width={String(SIZE)} height={String(SIZE)} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="18" y="18" width="68" height="68" fill="black" stroke="black" strokeWidth="4" strokeLinejoin="round"/>
                    <rect x="10" y="10" width="68" height="68" fill="#FFF500" stroke="black" strokeWidth="4" strokeLinejoin="round"/>
                    <path d="M56 24H52C36.9543 24 32 32.9543 32 44C32 55.0457 36.9543 64 52 64H56" stroke="black" strokeWidth="8"/>
                    <path d="M56 68L56 44" stroke="black" strokeWidth="8"/>
                    <path d="M60 48L44 48" stroke="black" strokeWidth="8"/>
                </svg>
                {/* S */}
                <svg className="hover:scale-150 transition" width={String(SIZE)} height={String(SIZE)} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="18" y="18" width="68" height="68" fill="black" stroke="black" strokeWidth="4" strokeLinejoin="round"/>
                    <rect x="10" y="10" width="68" height="68" fill="#ea580c" stroke="black" strokeWidth="4" strokeLinejoin="round"/>
                    <path d="M52.8333 24H44.5C36.7726 24 32 27.5817 32 34C32 40.4183 36.7726 44 44.5 44C52.2274 44 57 47.5817 57 54C57 60.4183 52.2274 64 44.5 64H36.1667" stroke="black" strokeWidth="8"/>
                </svg>
            </h1>

            {data ? <p>{JSON.stringify(data)}</p> : <p>loading</p>}
            <Controls /> 
            <Counter />
        </main>
    );
}