'use client';
import CheatCode from '../CheatCode';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import StoreInitializer from '@/app/components/StoreInitializer';
import { useStore } from '../../../src/store';


export default function ClientPokemon( {cheat} : {cheat: boolean} ) {
    const reveal = {
        yes: "brightness-100",
        no: "brightness-0"
    } 
    StoreInitializer({cheatUsed: cheat});
    const [pokemon, setPokemon] = useState<any>({});
    const [brightness, setBrightness] = useState<number>(0);
    const id = Math.floor(Math.random() * 898) + 1;
    const {count, name, inc, cheatUsed } = useStore(state => state);
    
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => res.json())
            .then(data => {
                let name = data!.name;
                let sprite = data!.sprites.other['official-artwork']['front_default'];
                console.log(sprite);
                setPokemon({pokemonName: name, sprite: sprite});
            });
    }, []);
    
    
    return (
        <div className="p-4 flex flex-col justify-center items-center ">
            {!cheatUsed ? <CheatCode/> : ""}
            {/* <StoreInitializer cheatUsed={cheatUsed}/> */}
            <p>{name}</p>
            <p>Counter: {count}</p>
            <button className="border-2 border-red-400" onClick={inc}>Increment</button>
        
            <div className="px-4 flex flex-nowrap justify-between w-[100dvw]">
                <p>Current Points: 0</p>
                <p className="">Questions left: 20</p>
            </div>
            {/* we will abstract this into its own component */}
            {pokemon && (  
                <div className='m-4 flex flex-col'>
                    <div className='bg-white'>
                        {
                            brightness == 0 ? 
                            <h1 className='text-3xl'>||</h1> :
                            <h1 className="text-black text-3xl text-center relative"><b>{pokemon.pokemonName}</b></h1>
                        }
                   {
                   pokemon.sprite ? 
                    <Image className={`brightness-${brightness}`} src={pokemon.sprite} alt="a Pokemon image for the quiz" width={475} height={475} priority/> : 
                    ""
                   }
                    </div>
                    { 
                        brightness == 0 ? 
                        <button className="mt-4 p-2 border border-blue-500" onClick={() => setBrightness(100)}>reveal pokemon</button> :
                        <button className="mt-4 p-2 border border-blue-500" onClick={() => setBrightness(0)}>hide pokemon</button>
                    }
                </div>
            )}

        </div>
    );
}