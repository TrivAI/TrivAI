"use client";

import { SessionProvider, useSession } from "next-auth/react";
import StoreInitializer from "./components/StoreInitializer";
import Nav from "./components/Nav";
import { UserState } from "@/src/store";


export default function ClientAppWrapper({ children, session, user }: {children: React.ReactNode, session: any; user: UserState;}) {
    
    return (
      <SessionProvider session={session}>
        {user ? <StoreInitializer user={user} /> : ""}
        <span>
          <Nav />
          <div data-main="Main Client Div" className="">{children}</div>
        </span>
      </SessionProvider>
    );
}