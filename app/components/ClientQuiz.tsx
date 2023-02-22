'use client';
import {useStore} from './StoreInitializer';
import { useState, useEffect } from 'react';


export default function ClientQuiz() {
    const [pokemon, setPokemon] = useState<any>({});
    const [brightness, setBrightness] = useState(0);
    useEffect(() => {
        const id = Math.floor(Math.random() * 898) + 1;
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => res.json())
            .then(data => {
                let name = data!.name;
                let sprite = data!.sprites.other['official-artwork']['front_default'];
                setPokemon({pokemonName: name, sprite: sprite});
            });
    },[]);
    const {count, name, inc} = useStore((state) => state);
    // if (pokemon) {
    //      console.log(pokemon?.sprites.other['official-artwork']['front_default']);
    // }
    return (
        <div className="flex flex-col justify-center items-center">
            <p>{name}</p>
            <p>Counter: {count}</p>
            <button className="border-2 border-red-400" onClick={inc}>Increment</button>
            
            
            {pokemon && (  
                <div className='m-4 flex flex-col'>
                    <h1>{pokemon.pokemonName}</h1>
                    <div className='bg-white'>
                        <img className= {`brightness-${brightness}`} src={pokemon.sprite} />
                    </div>
                    <button className="mt-4 p-2 border border-blue-500" onClick={() => setBrightness(100)}>reveal pokemon</button>
                </div>
            )}
        </div>
    );
}