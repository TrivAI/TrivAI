'use client';
import {useStore} from './StoreInitializer';

export default function ClientQuiz() {
    const {count, name, inc} = useStore((state) => state);
    return (
        <div>
            <p>{name}</p>
            <p>Counter: {count}</p>
            <button className="border-2 border-red-400" onClick={inc}>Increment</button>
        </div>
    );
}