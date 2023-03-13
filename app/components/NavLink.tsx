"use client";
import Link from "next/link";
import { usePathname } from 'next/navigation';


export default function NavLink({href, children, style, conditionalStyle} : {href: string, children: React.ReactNode, style : string, conditionalStyle?: string}) {
    let path = usePathname();
    let isActive: boolean = `${path}` === href;
    
    return (
        <Link href={href} className={`${style} ${isActive ? conditionalStyle : ""}`}> {children} </Link>
    );
}
