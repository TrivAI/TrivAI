"use client";
import { useStore } from "@/src/store";
import { useEffect, useState } from "react";


export default function StoreCounter(){
    const { totalScore, incrementScore } = useStore((state) => state);
    const [data, setData] = useState<{dude: string}>();
    function Controls() {
        return (
          <button
            className="rounded-full border-2 border-indigo-500 p-4"
            onClick={incrementScore}
          >
            one up
          </button>
        );
    }

    function Counter() {
        return (
          <div>
            <h1>{totalScore}</h1>
            {data ? <pre>{data.dude}</pre> : <p>loading</p>}
          </div>
        );
    }
    useEffect(() => {
        fetch("/api/hello").then((res) => res.json()).then((data) => {
            setData(data);
        });
    }, []);
    return(
        <>
            <Controls /> 
            <Counter />
        </>
    );

}

