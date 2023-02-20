'use client';
import {useStore}  from './StoreInitializer';

export default function ClientAbout() {
    const {count, name, inc} = useStore((state) => state);
    return (
        <div>
            <svg className="" width="64" height="64" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="18" y="18" width="68" height="68" fill="black" stroke="black" strokeWidth="4" strokeLinejoin="round"/>
                <rect x="10" y="10" width="68" height="68" fill="#FFF500" stroke="black" strokeWidth="4" strokeLinejoin="round"/>
                <path d="M42 28L26 44L42 60" stroke="black" strokeWidth="8"/>
                <path d="M26 44H68" stroke="black" strokeWidth="8"/>
            </svg>

            <p>This is the about website</p>
            <p>Counter: {count}</p>
            <button className="border-2 border-red-400" onClick={inc}>Increment</button>
        </div>
    );
}