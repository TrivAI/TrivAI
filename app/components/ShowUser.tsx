"use client";

export default function ShowUser( { role, name } : {role: string | undefined | null; name: string | undefined | null; }) {
    if (role)  {
        return (
            <>
            ,
            <div className="text-blue-500">
                <p className="text-2xl">{name?.toUpperCase()}</p>
            </div>
            </>
        )
    }
    return(null);
}