'use client';
import {useEffect, useState} from "react";


export default function Settings() {
    let [data, setData] = useState<any>();
    useEffect(() => {
        let x = 10 /0;
        fetch("http://localhost:3000/api/hello").then((res) => res.json()).then((data) => {
            setData(data);
        });
        // idk why this works
        console.log(x);
    }, []);
    return(
        <div>
            <h1>Settings</h1>
            {data ? <p>{JSON.stringify(data)}</p> : <p>loading</p>}
            <p>This is the settings page</p>
        </div>
    );
}