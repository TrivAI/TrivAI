'use client';
import { useEffect, useRef } from 'react';
import jsCheat from './cheatSRC.js';

import { usePathname } from 'next/navigation';
import { useStore } from '../../src/store';


export default function CheatCode({cheatUsed} : {cheatUsed: boolean}) {

    let { removeCheat } = useStore(state => state);
    if (cheatUsed === true) {
        return null;
    }
    useEffect(() => {
        alert("jscheat init");
        jsCheat.init({
            code: ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'],
            callback: () => {
                alert("dude no way")
                removeCheat();
                jsCheat.controller.abort();
            }
        });
    }, []);
    return null;
}