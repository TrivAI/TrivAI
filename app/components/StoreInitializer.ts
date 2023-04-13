"use client";
import { useRef } from "react";
import { useStore } from "../../src/store"; 
import type { UserState } from "../../src/store";


export default function StoreInitializer({user} : {user: UserState}) {
    const initialized = useRef(false);
    if (!initialized.current) {
        initialized.current = true;
        useStore.setState(user);
    }
    return null;
}

