import './globals.css'
import { Roboto } from 'next/font/google';
import Footer from './components/Footer';
import ClientAppWrapper from './ClientAppWrapper';
import { db } from '@/src/db';
import { getCurrentUser, getSession } from '@/src/session';
import type { UserState } from '@/src/store';
import { SessionProvider, useSession } from "next-auth/react";
import StoreInitializer from "./components/StoreInitializer";
import Nav from "./components/Nav";


interface IProps {
  children: React.ReactNode;
}
const roboto = Roboto({
  weight: ['500', '700'],
  subsets: ['latin'],
  display: 'swap'
});
export default async function RootLayout({
  children 
}: IProps) {
  const session = await getSession();
  const currentUser = await getCurrentUser();
  let dbUser;
  if(currentUser) {
    try {
        dbUser = await db.user.findUnique({
          where: {
            id: currentUser?.id,
          },
          select: {
            id: true,
            name: true,
            totalScore: true,
            cheatUsed: true,
            image: true,
          },
        }) as UserState;
    }
    catch (error) {
      console.log(error);
    }
  } else {
      console.log("no dbUser from layout");
  }
  
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
          //TODO Check if this is the best way to do this
          // strictly selecting the data we need from the dbUser object and avoiding the functions because they are not serializable
          user={dbUser as UserState}
        >
          {children}
        </ClientAppWrapper>
        <Footer />
      </body>
    </html>
  );
}
