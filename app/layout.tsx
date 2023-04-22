import './globals.css'
import { Roboto } from 'next/font/google';
import Footer from './components/Footer';
import ClientAppWrapper from './ClientAppWrapper';
import { db } from '@/src/db';

import { useStore } from '@/src/store';
import { getCurrentUser, getSession } from '@/src/session';
import type { UserState } from '@/src/store';

interface IProps {
  children: React.ReactNode;
}
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap'
})
export default async function RootLayout({
  children 
}: IProps) {
  const session = await getSession();
  const theUser = await getCurrentUser();

  if(theUser) {
    try {
        const user: UserState = (await db.user.findUnique({
        where: {
          id: theUser?.id,
        },
        select: {
          id: true,
          name: true,
          role: true,
          totalScore: true,
          cheatUsed: true,
          image: true,
        },
      })) as UserState;
      if (user) useStore.setState(user);
    }
    catch (error) {
      console.log(error);
    }
  } else {
      console.log("no user from layout");
  }
  
  // console.log("this is user state from layout: ", useStore.getState());
  return (
    <html className={roboto.className + " h-full coolBackground"} lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body
        className="h-full flex flex-col justify-between"
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
        <Footer />
      </body>
    </html>
  );
}
