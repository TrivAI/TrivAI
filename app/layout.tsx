import './globals.css'
import { Roboto } from 'next/font/google';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ClientAppWrapper from './ClientAppWrapper';
import { db } from '@/src/db';

import { useStore } from '@/src/store';
import { getCurrentUser } from '@/src/session';
import type { State } from '@/src/store';

interface IProps {
  children: React.ReactNode;
  session: any;
}
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap'
})
export default async function RootLayout({
  children,
  session
}: IProps) {
  const theUser = await getCurrentUser();
  // const userEmail = theUser?.email;
  if(theUser) {
      const user: State = (await db.user.findFirst({
        where: {
          email: theUser?.email,
        },
        select: {
          id: true,
          name: true,
          role: true,
          totalScore: true,
          cheatUsed: true,
          image: true,
        },
      })) as State;
      useStore.setState(user);
  } else {
      console.log("no user from layout");
  }
  console.log("this is user state from layout: ", useStore.getState());
  return (
    <html className={roboto.className + " lg:h-full"} lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body
        className=" flex flex-col coolBackground"
        data-atr="this is the body"
      >
        <ClientAppWrapper
          session={session}
          // strictly selecting the data we need from the user object and avoiding the functions because they are not serializable
          user={(({ id, name, role, totalScore, cheatUsed, image }) => ({
            id,
            name,
            role,
            totalScore,
            cheatUsed,
            image,
          }))(useStore.getState())}
        >
          {children}
        </ClientAppWrapper>
        {/* <SessionProvider session={session}> */}
        {/* <Nav />
          <div className="h-[150vh] lg:h-auto">{children}</div>
          <Footer /> */}
        {/* </SessionProvider> */}
      </body>
    </html>
  );
}
