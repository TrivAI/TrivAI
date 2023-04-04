"use client";
import { useSession } from "next-auth/react";

export default function ShowUser() {
    const { data: session, status,  } = useSession();
    if (status === 'authenticated')  {
        return (
            <>
            ,
            <div className="text-blue-500">
                <p className="text-2xl">{session && session.user ? session.user.name?.toUpperCase() : "" }</p>
            </div>
            </>
        )
    }
    return(
        <>
        </>
    );
}