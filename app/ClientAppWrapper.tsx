"use client";

import { SessionProvider, useSession } from "next-auth/react";
import StoreInitializer from "./components/StoreInitializer";
import Nav from "./components/Nav";


export default function ClientAppWrapper({ children, session, user }: any) {
    
    return (
      <SessionProvider session={session}>
        {user ? <StoreInitializer user={user} /> : ""}
        <span>
          <Nav />
          <div className="">{children}</div>
        </span>
      </SessionProvider>
    );
}