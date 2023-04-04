'use client';
import { signIn, signOut, useSession } from "next-auth/react";
import Link from 'next/link'
import { useEffect, useRef, useState } from "react";
import ShowUser from "./ShowUser";
import Starfield from './StarField';

export default function Nav() {
    const { data: session, status } = useSession();
    const [compoentWidth, setComponentWidth] = useState<number>(0);
    const [componentHeight, setComponentHeight] = useState<number>(0);
    const currentRef = useRef<HTMLElement>(null);

    
    useEffect(() => {
      const handleResize = () => {
          if(currentRef.current) {
            setComponentWidth(currentRef.current.offsetWidth);
            setComponentHeight(currentRef.current.offsetHeight);
          }
        }
      handleResize();

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return(
      <>
        <nav ref={currentRef} className='mb-2 flex flex-col items-center justify-center py-4 lg:flex-row lg:flex lg:items-center lg:flex-wrap lg:justify-between lg:px-4'>
          <Link className="coolText text-3xl mb-2" href="/">
            <b>Welcome to TrivAI <ShowUser/> </b>
          </Link>
          <div className='grid grid-cols-5 gap-2 mb-2 lg:mb-0'>
            {
              session ? 
                <>
                  <Link className="text-black bg-[#f87171] p-2 text-center" href="/admin"><b>Admin</b></Link>
                  <Link className="text-black bg-[#DD7DFF] p-2 text-center" href="/user"><b>User Results</b></Link>
                </> 
                  : 
                ""
            }
            <Link className="text-black bg-[#39DBFF] p-2 text-center" href="/quiz"><b>Quiz Page</b></Link>
            <Link className="text-black bg-[#88FF8A] p-2 text-center" href="/about"><b>About Page</b></Link>
            {
              session ?
                <Link className="text-black bg-[#f4b709] p-2 text-center" href="/settings"><b>Settings Page</b></Link>
                  :
                ""
            }
            
            {session ? <button onClick={() => signOut()}> Sign out</button> : <button onClick={() => signIn()}> Sign In</button>}
          </div>
        </nav>
        {/* {compoentWidth > 0 && componentHeight > 0 && <Starfield style="absolute pointer-events-none py-4" width={compoentWidth} height={componentHeight} />} */}
      </>
    );
}