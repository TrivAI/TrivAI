'use client';
import { signIn, signOut, useSession } from "next-auth/react";
import Link from 'next/link'
import { useEffect, useRef, useState } from "react";
import ShowUser from "./ShowUser";
import Starfield from './StarField';

export default function Nav() {
    const { data: session } = useSession();
    const [compoentWidth, setComponentWidth] = useState<number>(0);
    const [componentHeight, setComponentHeight] = useState<number>(0);
    const currentRef = useRef<HTMLElement>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    // const 

    // useEffect(() => {
    //   const handleResize = () => {
    //       if(currentRef.current) {
    //         setComponentWidth(currentRef.current.offsetWidth);
    //         setComponentHeight(currentRef.current.offsetHeight);
    //       }
    //     }
    //   handleResize();

    //   window.addEventListener('resize', handleResize);
    //   return () => window.removeEventListener('resize', handleResize);
    // }, []);

    return (
      <>
        <nav
          ref={currentRef}
          className="mb-2 flex flex-col items-center justify-center py-4 lg:flex-row lg:flex lg:items-center lg:flex-wrap lg:justify-between lg:px-4"
        >
          <Link className="coolText text-3xl mb-2" href="/">
            <b>
              Welcome to TrivAI{" "}
              <ShowUser role={session?.user?.role} name={session?.user?.name} />{" "}
            </b>
          </Link>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mb-2 lg:mb-0">
            {session ? (
              <>
                {session.user.role === "ADMIN" ? (
                  <Link
                    className="text-black bg-[#f87171] p-2 text-center"
                    href="/admin"
                  >
                    <b>ADMIN</b>
                  </Link>
                ) : null}
                <Link
                  className="text-black bg-[#DD7DFF] py-2 px-4 text-center"
                  href="/user"
                >
                  <b>RESULTS</b>
                </Link>
                <Link
                  className="text-black bg-[#39DBFF] py-2 px-4 text-center"
                  href="/quiz"
                >
                  <b>QUIZZES</b>
                </Link>
                <Link
                  className="text-black bg-[#88FF8A] py-2 px-4 text-center"
                  href="/about"
                >
                  <b>ABOUT</b>
                </Link>
                <Link
                  className="text-black bg-[#f4b709] py-2 px-4 text-center"
                  href="/settings"
                >
                  <b>SETTINGS</b>
                </Link>
                <button
                  className="coolBorder py-2 px-4  "
                  onClick={() => {
                    signOut({ callbackUrl: `/` });
                    setIsLoading(true);
                  }}
                  disabled={isLoading === true}
                >
                  {" "}
                  <b className="coolText">SIGN OUT</b>
                </button>
              </>
            ) : (
              <>
                <Link
                  className="text-black bg-[#39DBFF] py-2 px-4 text-center"
                  href="/quiz"
                >
                  <b>QUIZZES</b>
                </Link>
                <Link
                  className="text-black bg-[#88FF8A] py-2 px-4 text-center"
                  href="/about"
                >
                  <b>ABOUT</b>
                </Link>
                <button
                  className="coolBorder py-2 px-4"
                  onClick={() => {
                    signIn();
                    setIsLoading(true);
                  }}
                  disabled={isLoading === true}
                >
                  {" "}
                  <b className="coolText"> SIGN IN </b>
                </button>
              </>
            )}
          </div>
        </nav>
        {/* {compoentWidth > 0 && componentHeight > 0 && <Starfield style="absolute pointer-events-none py-4" width={compoentWidth} height={componentHeight} />} */}
      </>
    );
}