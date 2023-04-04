"use client";

import { SessionProvider, useSession } from "next-auth/react";
import Footer from "./components/Footer";
import StoreInitializer from "./components/StoreInitializer";
import Nav from "./components/Nav";


export default function ClientAppWrapper({ children, session, user }: any) {
    
    return (
        <SessionProvider session={session}>
            {user ? <StoreInitializer user={user}/> : ""}
            <Nav />
            <div className="h-[150vh] lg:h-auto">{children}</div>
            <Footer />
        </SessionProvider>
    )
}