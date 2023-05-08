'use client';
import { useEffect, useRef } from 'react';
import {jsCheat} from '@/src/cheatSRC.js';

import { usePathname } from 'next/navigation';
import { useStore } from '../../src/store';


export default function CheatCode() {

    let { removeCheat, incrementScore } = useStore((state) => state);
    useEffect(() => {
        
        jsCheat.init({
            code: ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'],
            callback: () => {
                alert("You have activated the cheat code! You have been awarded 10 points!")
                removeCheat();
                incrementScore(10);
                jsCheat.controller.abort();
            }
        });
    }, []);
    return null;
}